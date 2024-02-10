import React from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const DownloadInvoice = ({ rootElementId, downloadFileName }) => {
  const downloadPdfDocument =async () => {
    

    let printContents = document.getElementById(rootElementId).innerHTML;
    let iframe = document.createElement('iframe');
    iframe.style.display = 'none'; // Hide the iframe
    document.body.appendChild(iframe);
    let doc = iframe.contentDocument || iframe.contentWindow.document;

    // Copy stylesheets from parent document to iframe document
    Array.from(document.styleSheets).forEach(styleSheet => {
        if (styleSheet.href) { // External stylesheet
            let link = document.createElement('link');
            link.href = styleSheet.href;
            link.rel = 'stylesheet';
            link.onload = () => {
                console.log('Stylesheet loaded:', styleSheet.href);
            };
            link.onerror = (error) => {
                console.error('Error loading stylesheet:', styleSheet.href, error);
            };
            doc.head.appendChild(link);
        } else if (styleSheet.cssRules) { // Inline stylesheet
            let style = document.createElement('style');
            Array.from(styleSheet.cssRules).forEach(cssRule => {
                style.appendChild(document.createTextNode(cssRule.cssText));
            });
            doc.head.appendChild(style);
        }
    });

    // Set the contents and print
    doc.body.innerHTML = printContents;
    iframe.contentWindow.print();

    // Clean up: remove the iframe after printing
    document.body.removeChild(iframe);


  };
  return (
    <>
      <button
        className={
          "text-white border-yellow-300 self-center bg-yellow-400 rounded-3xl w-48 px-6 py-3  h-11 "
        }
        onClick={downloadPdfDocument}
      >
        Download Invoice
      </button>
    </>
  );
};

export default DownloadInvoice;
