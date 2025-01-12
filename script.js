$(document).ready(function() {
    function loadPage(page) {
        switch (page) {
            case 'inicio':
                $('#content').html(`
                    <h2>Inicio</h2>
                    <p>En Ontologías, no solo desarrollamos software, sino que creamos soluciones que redefinen la eficiencia empresarial...</p>
                    <p><a href="#" data-page="soluciones" class="cta-button">Descubre Cómo</a></p>
                `);
                break;
            case 'vision':
                $('#content').html(`
                    <h2>Nuestra Visión</h2>
                    <p>Somos pioneros en la integración de inteligencia artificial con el conocimiento humano...</p>
                    <p>Desde nuestras oficinas en Bogotá, desarrollamos soluciones que compiten en el escenario global...</p>
                `);
                break;
            case 'soluciones':
                $('#content').html(`
                    <h2>Soluciones</h2>
                    <h3>KnowledgeStream</h3>
                    <p>Empodera tu Empresa con Conocimiento Inteligente y Automatización...</p>
                    <h3>OntologyBuilder</h3>
                    <p>Construye Grafos de Conocimiento que Potencian tu Inteligencia Empresarial...</p>
                `);
                break;
            case 'impacto':
                $('#content').html(`
                    <h2>Impacto Real</h2>
                    <p>En Ontologías, medimos nuestro éxito por el impacto que generamos en nuestros clientes...</p>
                    <ul>
                        <li>Optimización en Firmas Legales...</li>
                        <li>Automatización Fiscal en una Multinacional...</li>
                        <li>Gestión Documental en Consultoras...</li>
                    </ul>
                `);
                break;
            case 'sectores':
                $('#content').html(`
                    <h2>Sectores a los que Servimos</h2>
                    <p>Legal: Acelera la toma de decisiones y mejora la precisión...</p>
                    <p>Fiscal: Automatiza y asegura la precisión en la gestión de impuestos...</p>
                    <p>Gestión Documental: Optimiza la administración de documentos...</p>
                `);
                break;
            case 'contacto':
                $('#content').html(`
                    <h2>Contacto</h2>
                    <p>Estamos Listos para Impulsar tu Empresa...</p>
                    <form>
                        <label for="name">Nombre:</label><br>
                        <input type="text" id="name" name="name"><br><br>
                        <label for="email">Email:</label><br>
                        <input type="email" id="email" name="email"><br><br>
                        <label for="message">Mensaje:</label><br>
                        <textarea id="message" name="message"></textarea><br><br>
                        <input type="submit" value="Enviar">
                    </form>
                `);
                break;
            default:
                $('#content').html('<h2>Página no encontrada</h2>');
        }
    }

    // Load default page
    loadPage('inicio');

    // Handle menu clicks
    $('.menu a').click(function(e) {
        e.preventDefault();
        const page = $(this).data('page');
        loadPage(page);
    });
});
