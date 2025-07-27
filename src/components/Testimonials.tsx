import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80",
    name: "Koçluk Öğrencisi",
    userName: "@ogrenci",
    comment: "Öncelikle koçluk bana düzenli ve disiplinli bir çalışma, geçen seneki hatalarımı fark etmemi sağladı. En beğendiğim kısım da sadece bir koç değil daha fazlasıydınız. Yani gerek moralim bozukken ve diğer zamanlarda konuşabildik. Takıldığım, anlamadığım sorular üstüne de istediğim zaman konuşabildik. Olumsuz yorumum da yok. İyi ki bu sürece sizinle başlamışım.",
  },
  {
    image: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80",
    name: "Koçluk Öğrencisi",
    userName: "@ogrenci1",
    comment:
      "Ben oldukça verimli geçtiğini kesin bir şekilde söyleyebilirim. Her hafta düzenli deneme çözüp ardından haftanın programını denemedeki eksikliklere göre ayarlamak, bir konu için eksiğim varsa direkt programa dahil etmemiz vs. Bence her şey olması gerektiği gibiydi hatta üstüydü de.",
  },

  {
    image: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80",
    name: "Koçluk Öğrencisi",
    userName: "@ogrenci2",
    comment:
      "Geçen yıl koçluk almak için kararsızdım çünkü online olarak daha önce koçluk almamıştım ama bu yılı sizinle geçirmek benim için çok yararlı oldu. Hem ders çalışma düzenimi oluşturdunuz hem de bir öğretmenden ziyade arkadaşım oldunuz. Ayrıca çalışma rutininiz ve davranışlarınızla beni çok etkilediniz. İyi ki sizinle tanıştım ve bu yoğun YKS sürecini daha rahat geçirebildim. Yeni öğrencileriniz bu konuda çok şanslı. Sizi örnek alarak umarım sizin gibi bir öğretmen olurum.",
  },
  {
    image: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80",
    name: "Koçluk Öğrencisi",
    userName: "@ogrenci3",
    comment:
      "Bensu kendisi tam bir dost gibi ama yeri geldiğinde süper bir koç. Baskı yapmadan bir insan nasıl ders çalıştırılır süper bir örnek. Siz fark etmeden netiniz artıyor. Moraliniz bozuk olduğunda ağlayacak bir omuz ama gerçekçi tavsiyeler veren bir omuz. İyi ki onunla çalışmışım çok tatlı çok komik biri aynı zamanda çok güzel hiç motivasyonunuz yoksa bile sizi motive edebilecek parlak bir karakteri var. Onunla olan görüşmelerde ne demek istediğimi anlarsınız.",
  },
  {
    image: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80",
    name: "Koçluk Öğrencisi",
    userName: "@ogrenci4",
    comment:
      "Hocam öncelikle her şey için çok ama çok teşekkür ederim yani koçluk dışında da sizinle tanıştığım için o kadar mutluyum ki… İyi ki diyorum bana o kadar çok şey kattınız. Düştüğümde direkt sizin sayenizde kalktım iyi ki ama iyi ki varsınız. Emekleriniz için çok teşekkür ederim. Umarım sonucum da iyi gelir ve sizi onurlandırırım. Bu süreci atlatırken bütün desteklerinizi ve yani programlarınızdan tutun motivasyonunuza kadar her şeyi sonuna kadar hissettim. Sizi çok ama çok seviyorum. İyi ki varsınız.",
  },
  {
    image: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80",
    name: "Koçluk Öğrencisi",
    userName: "@ogrenci5",
    comment:
      "Koçluğunuz benim için sadece bir koçluk değildi hocam bir koçtan daha fazlası oldunuz benim için. Anlayışınız, katkılarınız o kadar çok ki… Bu mücadelede her zaman destek oldunuz bana hep inandınız. Bana verdiğiniz, kattığınız ve yaptığınız her şey için çok teşekkür ederim hocam. İyi ki sizinle çıktım bu yola iyi ki de tanıdım ve iyi ki varsınız hocam.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-blue-800 bg-clip-text">
          {" "}
          ÖĞRENCİ YORUMLARI{" "}
        </span>
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
