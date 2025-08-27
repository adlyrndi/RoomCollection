import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { message } = await req.json();

  try {
    // Kirim data ke Google Form
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSccGFX2z7FywTfyR1DLps3B2Iv4715LSVGVMnQ4JbiTPvuSIQ/formResponse";
    const formData = new URLSearchParams();
    formData.append("entry.28609866", message);

    await fetch(formUrl, { method: "POST", body: formData });

    // Kirim response JSON ke frontend
    return NextResponse.json({ success: true, message: "Submitted successfully" });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to submit" }, { status: 500 });
  }
  
}
