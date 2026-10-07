import { LightningElement, api, wire } from 'lwc';

// Importa o método Apex que calcula a saúde da Opportunity
import getDealHealth from '@salesforce/apex/NexTechDealHealthController.getDealHealth';

export default class NexTechDealHealth extends LightningElement {

    // Recebe automaticamente o Id da Opportunity aberta
    @api recordId;

    dealHealth;
    error;

    // Chama o Apex sempre que o componente recebe uma Opportunity
    @wire(getDealHealth, { opportunityId: '$recordId' })
    wiredDealHealth({ data, error }) {

        if (data) {
            this.dealHealth = data;
            this.error = undefined;
        } else if (error) {
            this.dealHealth = undefined;
            this.error = 'Não foi possível analisar esta oportunidade.';
            console.error(error);
        }
    }
}