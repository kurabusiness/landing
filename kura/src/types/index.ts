export interface SubscribeResponse {
  status: "subscribed" | "already_subscribed" | "not_configured" | "error";
  message?: string;
}
