import { useState } from "react";
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
    popular: 0,
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
    popular: 1,
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
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleOpenModal = (title: string) => {
    setSelectedPlan(title);
    setOpenModal(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      ...form,
      package: selectedPlan,
    };

    try {
      const res = await fetch("/api/send-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Mesaj gönderilemedi");

      console.log("Mesaj başarıyla gönderildi");
      setOpenModal(false);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Hata:", error);
      alert("Mesaj gönderilirken bir hata oluştu.");
    }
  };

  return (
      <>
        <section id="pricing" className="container py-24 sm:py-32">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            KOÇLUK
            <span className="bg-gradient-to-b from-primary/60 to-primary text-blue-800 bg-clip-text">
            {" "}
              PAKETLERİ{" "}
          </span>
          </h2>
          <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingList.map((pricing: PricingProps) => (
                <Card
                    key={pricing.title}
                    className={
                      pricing.popular === PopularPlanType.YES
                          ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                          : ""
                    }
                >
                  <CardHeader>
                    <CardTitle className="flex item-center justify-between">
                      {pricing.title}
                      {pricing.popular === PopularPlanType.YES ? (
                          <Badge variant="secondary" className="text-sm text-primary">
                            Popüler
                          </Badge>
                      ) : null}
                    </CardTitle>
                    <div>
                      <span className="text-3xl font-bold">₺{pricing.price}</span>
                      <span className="text-muted-foreground"> /month</span>
                    </div>
                    <CardDescription>{pricing.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <Button className="w-full" onClick={() => handleOpenModal(pricing.title)}>
                      {pricing.buttonText}
                    </Button>
                  </CardContent>

                  <hr className="w-4/5 m-auto mb-4" />

                  <CardFooter className="flex">
                    <div className="space-y-4">
                      {pricing.benefitList.map((benefit: string) => (
                          <span key={benefit} className="flex">
                      <Check className="text-green-500" />
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
                {/* Kapatma butonu */}
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
                        className="w-full rounded-md border border-input bg-muted px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                        placeholder="Adınızı ve soyadınızı giriniz"
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
                        className="w-full rounded-md border border-input bg-muted px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
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
                        className="w-full rounded-md border border-input bg-muted px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
                        placeholder="Size nasıl yardımcı olabiliriz?"
                    />
                  </div>

                  <div className="flex justify-end gap-3 pt-2">
                    <Button
                        variant="secondary"
                        onClick={() => setOpenModal(false)}
                        type="button"
                        className="px-4"
                    >
                      Vazgeç
                    </Button>
                    <Button type="submit" className="px-6">
                      Gönder
                    </Button>
                  </div>
                </form>
              </div>
            </div>
        )}

      </>
  );
};
