import prisma from "@/lib/db";
import { generateRandomNumber } from "@/lib/utils";
import { sendOtpSchema } from "@/validators/auth";

export async function POST(req: Request) {
  const phone = await req.json();
  const isValidatePhone = sendOtpSchema.safeParse({ phone });
  if (!isValidatePhone.success) {
    return Response.json(
      { message: isValidatePhone.error.errors[0].message },
      { status: 422 }
    );
  }

  const code = generateRandomNumber(100_000, 999_999).toString();

  const expirationTime = Number(process.env.OTP_EXPIRATION) || 90;
  const expires_at = new Date(Date.now() + expirationTime * 1000);

  await prisma.otp.upsert({
    where: { phone },
    update: {
      code,
      expires_at,
      is_used: false,
    },
    create: {
      phone,
      code,
      expires_at,
    },
  });

  return Response.json({ message: "کد تایید با موفقیت ارسال گردید!", code });
}
