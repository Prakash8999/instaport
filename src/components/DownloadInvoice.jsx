import React from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const DownloadInvoice = ({ rootElementId, downloadFileName }) => {
  const downloadPdfDocument = () => {
    const input = document.getElementById(rootElementId);
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save(`${downloadFileName}.pdf`);
    });
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
