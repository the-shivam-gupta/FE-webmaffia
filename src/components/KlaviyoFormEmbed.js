import { KLAVIYO_EMBEDDED_FORM_ID } from "@/lib/klaviyo";

export default function KlaviyoFormEmbed({
  formId = KLAVIYO_EMBEDDED_FORM_ID,
}) {
  return (
    <div className="formWarpperx">
      <div className={`klaviyo-form-${formId}`} />
    </div>
  );
}
