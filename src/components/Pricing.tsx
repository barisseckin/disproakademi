import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "YDT AYLIK KOÇLUK",
    popular: PopularPlanType.NO,
    price: 2200,
    description: "",
    buttonText: "İletişime Geç",
    benefitList: [
      "Kişiye özel YDT çalışma programları",
      "Günlük takip",
      "Haftalık görüşme",
      "YDT Soru çözüm taktikleri",
      "Ödevlendirmeler",
    ],
  },
  {
    title: "YDT + TYT AYLIK KOÇLUK",
    popular: PopularPlanType.YES,
    price: 2800,
    description: "",
    buttonText: "İletişime Geç",
    benefitList: [
      "Kişiye özel TYT+YDT çalışma programları",
      "Günlük takip",
      "Haftalık görüşme",
      "YDT Soru çözüm taktikleri",
      "Ödevlendirmeler",
    ],
  },
];


export const Pricing = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error" | null; text: string }>({
    type: null,
    text: "",
  });
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    coachName: "",
  });

  const handleOpenModal = (title: string) => {
    setSelectedPlan(title);
    setOpenModal(true);
    setMessage({ type: null, text: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const packageTypeMap: Record<string, string> = {
    "YDT AYLIK KOÇLUK": "YDT_MONTH",
    "YDT + TYT AYLIK KOÇLUK": "YDT_TYT_MONTH",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedPlan) {
      setMessage({ type: "error", text: "Bir paket seçiniz." });
      return;
    }

    // Seçilen planın bilgilerini bul

    const payload = {
      mail: form.email,
      nameSurname: form.name,
      coachInformation: form.coachName,
      packageType: packageTypeMap[selectedPlan] || "UNKNOWN",
      title: `${selectedPlan} - İletişim Talebi`,
      description: form.message || "Boş mesaj",
      key: "xqGJhOM0lfLBnlgerfgtyxj3UYbtHU",
    };

    try {
      setLoading(true);
      const res = await fetch("https://api.distroakademi.com/api/v1/mails/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Mesaj gönderilemedi");

      setMessage({ type: "success", text: "Mesajınız başarıyla gönderildi." });
      setForm({ name: "", email: "", message: "", coachName: "" });
    } catch (error) {
      setMessage({ type: "error", text: "Mesaj gönderilirken bir hata oluştu." });
    } finally {
      setLoading(false);
    }
  };

  return (
      <>
        <section id="pricing" className="container py-24 sm:py-32">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            KOÇLUK
            <span className="bg-gradient-to-b from-primary/60 to-primary text-blue-800 bg-clip-text">
            {" "}PAKETLERİ{" "}
          </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {pricingList.map((pricing) => (
                <Card
                    key={pricing.title}
                    className={
                      pricing.popular === PopularPlanType.YES
                          ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                          : ""
                    }
                >
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {pricing.title}
                      {pricing.popular === PopularPlanType.YES && (
                          <Badge variant="secondary" className="text-sm text-primary">
                            Popüler
                          </Badge>
                      )}
                    </CardTitle>
                    <div>
                      <span className="text-3xl font-bold">₺{pricing.price}</span>
                      <span className="text-muted-foreground"> /ay</span>
                    </div>
                    <CardDescription>{pricing.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <Button
                        className="w-full"
                        onClick={() => handleOpenModal(pricing.title)}
                    >
                      {pricing.buttonText}
                    </Button>
                  </CardContent>

                  <hr className="w-4/5 m-auto mb-4" />

                  <CardFooter>
                    <div className="space-y-4">
                      {pricing.benefitList.map((benefit) => (
                          <span key={benefit} className="flex items-center">
                      <Check className="text-green-500" size={18} />
                      <h3 className="ml-2">{benefit}</h3>
                    </span>
                      ))}
                    </div>
                  </CardFooter>
                </Card>
            ))}
          </div>
        </section>

        {openModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
              <div className="relative bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-muted max-w-lg w-full p-8 animate-fade-in">
                <button
                    onClick={() => setOpenModal(false)}
                    className="absolute top-3 right-3 text-muted-foreground hover:text-primary text-xl"
                    aria-label="Kapat"
                >
                  &times;
                </button>

                <h2 className="text-2xl font-bold mb-6 text-center text-foreground">
                  {selectedPlan} için iletişim formu
                </h2>

                {message.text && (
                    <div
                        className={`mb-4 p-3 rounded-md text-sm ${
                            message.type === "success"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                        }`}
                    >
                      {message.text}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1">
                      İsim Soyisim
                    </label>
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-md border border-input bg-muted px-4 py-2"
                        placeholder="Adınızı ve soyadınızı giriniz"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1">
                      Talep Edilen Koç
                    </label>
                    <input
                        name="coachName"
                        value={form.coachName}
                        onChange={handleChange}
                        required
                        className="w-full rounded-md border border-input bg-muted px-4 py-2"
                        placeholder="Koçluk talep ettiğiniz ismi giriniz"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1">
                      E-posta
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-md border border-input bg-muted px-4 py-2"
                        placeholder="ornek@mail.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1">
                      Açıklama
                    </label>
                    <textarea
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        required
                        className="w-full rounded-md border border-input bg-muted px-4 py-2 resize-none"
                        placeholder="Size nasıl yardımcı olabiliriz?"
                    />
                  </div>

                  <div className="flex justify-end gap-3 pt-2">
                    <Button
                        variant="secondary"
                        onClick={() => setOpenModal(false)}
                        type="button"
                        className="px-4"
                        disabled={loading}
                    >
                      Vazgeç
                    </Button>
                    <Button
                        type="submit"
                        className="px-6 flex items-center justify-center"
                        disabled={loading}
                    >
                      {loading ? <BeatLoader size={8} color="#ffffff" /> : "Gönder"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
        )}
      </>
  );
};
