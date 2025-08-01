import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error" | null; text: string }>({
    type: null,
    text: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage({ type: "error", text: "Lütfen e-posta adresinizi giriniz." });
      return;
    }

    const payload = {
      mail: email,
      title: "Newsletter Abonelik Talebi",
      description: "Kullanıcı bültene abone olmak istiyor.",
      key: "xqGJhOM0lfLBnlgerfgtyxj3UYbtHU",
    };

    try {
      setLoading(true);
      const res = await fetch("https://api.disproakademi.com/api/v1/mails/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Abonelik isteği gönderilemedi");

      setMessage({ type: "success", text: "Aboneliğiniz başarıyla kaydedildi." });
      setEmail("");
    } catch (error) {
      setMessage({ type: "error", text: "Abonelik sırasında bir hata oluştu." });
    } finally {
      setLoading(false);
    }
  };

  return (
      <section id="newsletter">
        <hr className="w-11/12 mx-auto" />

        <div className="container py-24 sm:py-32">
          <h3 className="text-center text-4xl md:text-5xl font-bold">
            Güncellemelerden{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-blue-800 bg-clip-text">
            Haberdar Ol
          </span>
          </h3>

          {message.type && (
              <p
                  className={`text-center mt-4 ${
                      message.type === "success" ? "text-green-500" : "text-red-500"
                  }`}
              >
                {message.text}
              </p>
          )}

          <form
              className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2 mt-6"
              onSubmit={handleSubmit}
          >
            <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
                className="bg-muted/50 dark:bg-muted/80"
                aria-label="email"
            />
            <Button disabled={loading}>
              {loading ? "Gönderiliyor..." : "Abone Ol"}
            </Button>
          </form>
        </div>

        <hr className="w-11/12 mx-auto" />
      </section>
  );
};
