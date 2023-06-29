import { LightningElement } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import scripts from '@salesforce/resourceUrl/docscripts';

export default class Docxreporting extends LightningElement {

    renderedCallback() {
        loadScript(this, scripts + "/docxtemplater.js")
            .then(() => console.log('Loaded doctemplater'))
            .catch(error => console.log(error));

        loadScript(this, scripts + "/pizzip.js")
            .then(() => console.log('Loaded pizzip'))
            .catch(error => console.log(error));

        loadScript(this, scripts + "/filesaver.js")
            .then(() => console.log('Loaded filesaver'))
            .catch(error => console.log(error));
    }

    async handleclick() {
        console.log("handling click event");

        const zip = new PizZip("somefakecontent");

        const doc = new window.docxtemplater(zip, {
                        paragraphLoop: true,
                        linebreaks: true,
                    });

        console.log(zip);

        console.log(doc);


        // PizZipUtils.getBinaryContent(
        //     scripts + "tag-example.docx", 
        //     function (error, content) {
        //         if (error) {
        //             throw error;
        //         }
        //         const zip = new PizZip(content);
        //         const doc = new window.docxtemplater(zip, {
        //             paragraphLoop: true,
        //             linebreaks: true,
        //         });

        //         // Render the document (Replace {first_name} by John, {last_name} by Doe, ...)
        //         doc.render({
        //             first_name: "John",
        //             last_name: "Doe",
        //             phone: "0652455478",
        //             description: "New Website",
        //         });

        //         const blob = doc.getZip().generate({
        //             type: "blob",
        //             mimeType:
        //                 "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        //             // compression: DEFLATE adds a compression step.
        //             // For a 50MB output document, expect 500ms additional CPU time
        //             compression: "DEFLATE",
        //         });
        //         // Output the document using Data-URI
        //         saveAs(blob, "output.docx");
        //     }
        // );
    }
}