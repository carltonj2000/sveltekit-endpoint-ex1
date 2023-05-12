import PDFDocument from 'pdfkit';

export async function GET() {
  const pdf = new PDFDocument();
  pdf.text('Hey friends!', 100, 100);
  pdf.end();

  return new Response(pdf, {
    headers: {
      'Content-type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=awesome.pdf'
    }
  });
}
