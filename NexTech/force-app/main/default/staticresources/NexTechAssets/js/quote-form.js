(function () {
    function initialiseQuoteForm() {
        var form = document.getElementById('quote-form');
        if (!form) {
            return;
        }

        var caseEndpoint = 'https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8&orgId=00Dfj00000Yu14K';
        var leadEndpoint = 'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00Dfj00000Yu14K';
        var productInputs = Array.prototype.slice.call(document.querySelectorAll('[data-product-selection]'));
        var serviceInputs = Array.prototype.slice.call(document.querySelectorAll('[data-service-selection]'));
        var summary = document.getElementById('quote-summary');

        function productQuantity(input) {
            return document.querySelector('[data-quantity-for="' + input.id + '"]');
        }

        function updateProduct(input) {
            var card = input.parentNode;
            var quantity = productQuantity(input);

            if (input.checked) {
                if (card.className.indexOf('selected') === -1) {
                    card.className += ' selected';
                }
                quantity.disabled = false;
                if (!quantity.value || Number(quantity.value) < 1) {
                    quantity.value = 1;
                }
            } else {
                card.className = card.className.replace(/\sselected/g, '');
                quantity.disabled = true;
            }
        }

        function selectedProducts() {
            return productInputs
                .filter(function (input) {
                    return input.checked;
                })
                .map(function (input) {
                    var quantity = productQuantity(input);
                    return input.getAttribute('data-label') + ' × ' + (quantity.value || 1);
                });
        }

        function selectedServices() {
            return serviceInputs
                .filter(function (input) {
                    return input.checked;
                })
                .map(function (input) {
                    return input.getAttribute('data-label');
                });
        }

        function updateSummary() {
            var products = selectedProducts();
            var services = selectedServices();
            var count = products.length + services.length;

            if (count === 0) {
                summary.textContent = 'Ainda não selecionou produtos ou serviços. Pode enviar apenas uma pergunta.';
                return;
            }

            summary.textContent = count + (count === 1 ? ' escolha adicionada: ' : ' escolhas adicionadas: ') + products.concat(services).join(' · ');
        }

        function scrollToQuote() {
            var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            document.getElementById('orcamento').scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
        }

        productInputs.forEach(function (input) {
            updateProduct(input);
            input.addEventListener('change', function () {
                updateProduct(input);
                updateSummary();
            });

            productQuantity(input).addEventListener('input', updateSummary);
        });

        serviceInputs.forEach(function (input) {
            input.addEventListener('change', updateSummary);
        });

        Array.prototype.slice.call(document.querySelectorAll('[data-select-product]')).forEach(function (button) {
            button.addEventListener('click', function () {
                var input = document.getElementById(button.getAttribute('data-select-product'));
                if (!input) {
                    return;
                }

                input.checked = true;
                updateProduct(input);
                updateSummary();
                scrollToQuote();
                window.setTimeout(function () {
                    productQuantity(input).focus();
                }, 450);
            });
        });

        Array.prototype.slice.call(document.querySelectorAll('[data-select-service]')).forEach(function (button) {
            button.addEventListener('click', function () {
                var input = document.getElementById(button.getAttribute('data-select-service'));
                if (!input) {
                    return;
                }

                input.checked = true;
                updateSummary();
                scrollToQuote();
                window.setTimeout(function () {
                    input.focus();
                }, 450);
            });
        });

        form.addEventListener('submit', function () {
            var selectedIntent = document.querySelector('[data-intent]:checked');
            var intent = selectedIntent ? selectedIntent.value : 'Pedido através do site';
            var isInformationRequest = intent === 'Pedido de informações';
            var products = selectedProducts();
            var services = selectedServices();
            var message = document.getElementById('description').value.trim();
            var lines = [
                'Tipo de pedido: ' + intent,
                'Produtos: ' + (products.length ? products.join(', ') : 'Não selecionado'),
                'Serviços: ' + (services.length ? services.join(', ') : 'Não selecionado')
            ];

            if (message) {
                lines.push('Mensagem: ' + message);
            }

            form.action = isInformationRequest ? leadEndpoint : caseEndpoint;
            document.getElementById('last-name').value = document.getElementById('name').value.trim();
            document.getElementById('subject').value = intent + ' — NexTech';
            document.getElementById('description').value = lines.join('\n');
        });

        updateSummary();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialiseQuoteForm);
    } else {
        initialiseQuoteForm();
    }
}());
