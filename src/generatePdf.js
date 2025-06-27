import jsPDF from "jspdf";

export async function generatePdfFromHtml(htmlContent, options = {}) {
  const doc = new jsPDF(options);
  
  doc.html(htmlContent, {
    callback: function (doc) {
      doc.save(options.filename || "holder.pdf");
    },
    x: 10,
    y: 10,
    html2canvas: { scale: 0.8 },
    autoPaging: 'text',
  });
}