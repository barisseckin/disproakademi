import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin } from "lucide-react";
import { LightBulbIcon } from "./Icons";
import {Input} from "@/components/ui/input.tsx";


export const HeroCards = () => {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error" | null; text: string }>({
    type: null,
    text: "",
  });

  const handleSubmit = async () => {
    if (!email) {
      setMessage({ type: "error", text: "Lütfen e-posta adresinizi giriniz." });
      return;
    }

    try {
      setLoading(true);
      setMessage({ type: null, text: "" });

      const payload = {
        mail: email,
        nameSurname: "",
        coachInformation: "",
        packageType: "UNKNOWN",
        title: "İletişim Talebi",
        description: "",
        key: "xqGJhOM0lfLBnlgerfgtyxj3UYbtHU",
      };

      const res = await fetch("https://api.disproakademi.com/api/v1/mails/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("İstek başarısız");

      setMessage({ type: "success", text: "Teşekkürler! En kısa sürede size dönüş yapacağız." });
      setEmail("");
      setShowEmailForm(false);
    } catch (err) {
      setMessage({ type: "error", text: "Bir hata oluştu. Lütfen tekrar deneyin." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt=""
              src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80"
            />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Koçluk Öğrencisi</CardTitle>
            <CardDescription>@ogrenci1</CardDescription>
          </div>
        </CardHeader>

        <CardContent>Öncelikle koçluk bana düzenli ve disiplinli bir çalışma, geçen...</CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="https://i.postimg.cc/NFfsqfXV/bensu-template.jpg"
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Bensu Seçkin</CardTitle>
          <CardDescription className="font-normal text-primary">
            DİL 5448.
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
          </p>
        </CardContent>

        <CardFooter>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://twitter.com/leo_mirand4"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">X icon</span>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-foreground w-5 h-5"
              >
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>

            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/leopoldo-miranda/"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Linkedin icon</span>
              <Linkedin size="20" />
            </a>
          </div>
        </CardFooter>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            YDT + TYT AYLIK KOÇLUK
            <Badge
              variant="secondary"
              className="text-sm text-primary"
            >
              Popüler
            </Badge>
          </CardTitle>
          <div>

          </div>

          <CardDescription>

          </CardDescription>
        </CardHeader>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["Kişiye özel TYT+YDT çalışma programları ", "Günlük takip", "Haftalık görüşme", "YDT Soru çözüm taktikleri", "Ödevlendirmeler"].map(
              (benefit: string) => (
                <span
                  key={benefit}
                  className="flex"
                >
                  <Check className="text-green-500" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div className="w-full">
            <CardTitle>Ücretsiz görüşme & tanışma fırsatı</CardTitle>
            <CardDescription className="text-md mt-2">
              Formu doldurun sizinle iletişime geçelim.
              <hr className="w-4/5 m-auto mb-4" />

              {!showEmailForm ? (
                  <Button onClick={() => setShowEmailForm(true)} className="w-full">
                    Bize Ulaş
                  </Button>
              ) : (
                  <div className="space-y-2">
                    <Input
                        type="email"
                        placeholder="E-posta adresiniz"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button onClick={handleSubmit} disabled={loading} className="w-full">
                      {loading ? "Gönderiliyor..." : "Gönder"}
                    </Button>
                    {message.text && (
                        <p
                            className={`text-sm ${
                                message.type === "success" ? "text-green-500" : "text-red-500"
                            }`}
                        >
                          {message.text}
                        </p>
                    )}
                  </div>
              )}
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
