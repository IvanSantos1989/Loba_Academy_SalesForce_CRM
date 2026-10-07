public with sharing class NexTechDealHealthController {

    @AuraEnabled(cacheable=true)
    public static DealHealthResult getDealHealth(Id opportunityId) {

        Opportunity opp = [
            SELECT Id, AccountId, Amount, CloseDate, IsClosed
            FROM Opportunity
            WHERE Id = :opportunityId
            LIMIT 1
        ];

        Integer contactRoles = [
            SELECT COUNT()
            FROM OpportunityContactRole
            WHERE OpportunityId = :opportunityId
        ];

        Integer products = [
            SELECT COUNT()
            FROM OpportunityLineItem
            WHERE OpportunityId = :opportunityId
        ];

        DealHealthResult result = new DealHealthResult();

        result.hasAccount = opp.AccountId != null;
        result.hasContact = contactRoles > 0;
        result.hasProducts = products > 0;
        result.hasAmount = opp.Amount != null && opp.Amount > 0;
        result.validCloseDate =
            opp.CloseDate != null &&
            opp.CloseDate >= Date.today();

        Integer score = 0;

        if (result.hasAccount) {
            score += 15;
        }

        if (result.hasContact) {
            score += 20;
        }

        if (result.hasProducts) {
            score += 25;
        }

        if (result.hasAmount) {
            score += 20;
        }

        if (result.validCloseDate) {
            score += 20;
        }

        result.score = score;

        // Define o estado geral da oportunidade.
        if (score >= 80) {
            result.status = 'Healthy';
        } else if (score >= 50) {
            result.status = 'Needs Attention';
        } else {
            result.status = 'High Risk';
        }

        result.alerts = new List<String>();

        // Alerta se a data prevista já passou.
        if (!opp.IsClosed &&
            opp.CloseDate != null &&
            opp.CloseDate < Date.today()) {

            result.alerts.add(
                'A Close Date já passou. Atualize a previsão de fecho!'
            );
        }

        // Alerta se faltar uma semana ou menos e ainda não houver produtos.
        if (!opp.IsClosed &&
            opp.CloseDate != null &&
            opp.CloseDate >= Date.today() &&
            opp.CloseDate <= Date.today().addDays(7) &&
            !result.hasProducts) {

            result.alerts.add(
                'O fecho está próximo, mas ainda não existem produtos associados!'
            );
        }

        // Recomenda a primeira ação importante que falta.
        if (!result.hasAccount) {
            result.recommendation = 'Associe uma Account à oportunidade.';
        } else if (!result.hasContact) {
            result.recommendation = 'Adicione um Contact Role à oportunidade.';
        } else if (!result.hasProducts) {
            result.recommendation = 'Adicione pelo menos um produto à oportunidade.';
        } else if (!result.hasAmount) {
            result.recommendation = 'Defina o valor da oportunidade.';
        } else if (!result.validCloseDate) {
            result.recommendation = 'Atualize a Close Date.';
        } else {
            result.recommendation =
                'A oportunidade possui os dados essenciais para avançar.';
        }

        return result;
    }


    public class DealHealthResult {

        @AuraEnabled
        public Integer score;

        @AuraEnabled
        public String status;

        @AuraEnabled
        public Boolean hasAccount;

        @AuraEnabled
        public Boolean hasContact;

        @AuraEnabled
        public Boolean hasProducts;

        @AuraEnabled
        public Boolean hasAmount;

        @AuraEnabled
        public Boolean validCloseDate;

        @AuraEnabled
        public List<String> alerts;

        @AuraEnabled
        public String recommendation;
    }
}