import { PASSWORD_HINTS, type PasswordTargetKey } from "@/lib/portfolio-content";

const PASSWORDS: Record<PasswordTargetKey, string> = {
  "case-study-1":
    process.env.CASE_STUDY_1_PASSWORD ?? "AyushSoProfesh",
  "case-study-2":
    process.env.CASE_STUDY_2_PASSWORD ?? "AyushSoProfesh",
  "project-3":
    process.env.CASE_STUDY_3_PASSWORD ?? "AyushSoProfesh",
};

type PasswordRequest = {
  project?: string;
  password?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as PasswordRequest;
  const project = body.project as PasswordTargetKey | undefined;
  const password = body.password?.trim();

  if (!project || !(project in PASSWORDS)) {
    return Response.json(
      { error: "Unknown project requested." },
      { status: 400 },
    );
  }

  if (!password) {
    return Response.json(
      { error: "Enter the password to continue." },
      { status: 400 },
    );
  }

  if (password !== PASSWORDS[project]) {
    return Response.json(
      {
        error: `Incorrect password. Update ${PASSWORD_HINTS[project]} if you want to change it.`,
      },
      { status: 401 },
    );
  }

  return Response.json({ ok: true });
}
