import mailchimp from "@mailchimp/mailchimp_marketing";

const apiKey = process.env.MAILCHIMP_API_KEY;
const listId = process.env.MAILCHIMP_LIST_ID;
const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;

if (apiKey && serverPrefix) {
  mailchimp.setConfig({
    apiKey,
    server: serverPrefix,
  });
}

export async function subscribeEmail(email: string) {
  if (!apiKey || !listId || !serverPrefix) {
    if (process.env.NODE_ENV === "development") {
      console.log(`[DEV] Would subscribe: ${email}`);
      return { status: "subscribed" as const };
    }
    return { status: "not_configured" as const };
  }

  try {
    const response = await mailchimp.lists.addListMember(listId, {
      email_address: email,
      status: "subscribed",
      tags: ["manifesto-kura"],
    });

    return { status: "subscribed" as const, id: (response as { id: string }).id };
  } catch (error: unknown) {
    const err = error as { status?: number; response?: { body?: { title?: string } } };

    if (err.status === 400 && err.response?.body?.title === "Member Exists") {
      return { status: "already_subscribed" as const };
    }

    throw error;
  }
}
