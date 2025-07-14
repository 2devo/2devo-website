import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, Globe, User, AlertCircle, Shield, Phone } from "lucide-react"

export default function TermsPage() {
  const sections = [
    {
      icon: Globe,
      title: "Web Sitesi Kullanımı",
      content: [
        "Web sitesi 18 yaş üstü kullanıcılar içindir",
        "Sitede yer alan tüm içerikler telif hakkı koruması altındadır",
        "İçeriklerin izinsiz kopyalanması yasaktır",
        "Site üzerinden zararlı yazılım yayılması yasaktır",
        "Spam veya istenmeyen e-posta gönderimi yasaktır",
        "Başkalarının kişisel bilgilerini izinsiz kullanmak yasaktır",
      ],
    },
    {
      icon: User,
      title: "Kullanıcı Yükümlülükleri",
      content: [
        "Doğru ve güncel bilgi sağlamak",
        "Hesap güvenliğini sağlamak",
        "Şifreleri güvenli tutmak",
        "Yasalara uygun davranmak",
        "Diğer kullanıcılara saygılı olmak",
        "Ticari olmayan amaçlarla kullanmak",
      ],
    },
    {
      icon: Shield,
      title: "Fikri Mülkiyet Hakları",
      content: [
        "Site tasarımı ve kodları 2devo Digital'e aittir",
        "Logo, marka ve içerikler korunmaktadır",
        "Müşteri projeleri müşteriye aittir",
        "Portföy kullanım izni alınır",
        "Üçüncü parti içerikler lisanslıdır",
        "Telif ihlali durumunda yasal işlem başlatılır",
      ],
    },
    {
      icon: AlertCircle,
      title: "Sorumluluk Reddi",
      content: [
        "Site kesintisiz hizmet garantisi vermez",
        "Üçüncü parti bağlantılardan sorumlu değiliz",
        "Kullanıcı hatalarından sorumlu değiliz",
        "Veri kaybı riskine karşı yedekleme önerilir",
        "Yatırım tavsiyesi verilmez",
        "Sonuçlar garanti edilmez",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-600/20 text-blue-300 border-blue-500/30">Şartlar ve Koşullar</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Şartlar ve
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Koşullar
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
              2devo Digital web sitesi ve hizmetlerini kullanırken uymanız gereken genel şartlar ve koşullar.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-24">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Genel Bilgiler */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <Scale className="w-6 h-6 text-blue-400" />
                </div>
                <CardTitle className="text-2xl text-white">Genel Hükümler</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-4">
              <p>
                Bu şartlar ve koşullar, 2devo Digital web sitesi (www.2devo.com) ve sunulan hizmetlerin kullanımını
                düzenler. Web sitemizi ziyaret ederek veya hizmetlerimizden yararlanarak bu şartları kabul etmiş
                sayılırsınız.
              </p>
              <p>
                Bu şartlar ve koşullar, Türkiye Cumhuriyeti yasalarına göre hazırlanmış olup, herhangi bir uyuşmazlık
                durumunda Sakarya mahkemeleri yetkilidir.
              </p>
              <div className="bg-amber-600/10 border border-amber-500/30 rounded-lg p-4 mt-6">
                <p className="text-amber-300">
                  <strong>Önemli:</strong> Bu şartlar zaman zaman güncellenebilir. Güncellemeler web sitesinde
                  yayınlandığı tarihte yürürlüğe girer.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Ana Bölümler */}
          {sections.map((section, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">{section.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-slate-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}

          {/* Yasal Uyarılar */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Yasal Uyarılar ve Bildirimler</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">Yasak Faaliyetler</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Sisteme zarar verici faaliyetler</li>
                    <li>• Başkalarının haklarını ihlal etmek</li>
                    <li>• Yanıltıcı bilgi paylaşmak</li>
                    <li>• Ticari spam göndermek</li>
                    <li>• Telif hakkı ihlali yapmak</li>
                    <li>• Kişisel verileri kötüye kullanmak</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">Yaptırımlar</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Hesap askıya alma</li>
                    <li>• Hizmet erişimini engelleme</li>
                    <li>• Yasal işlem başlatma</li>
                    <li>• Tazminat talep etme</li>
                    <li>• Kolluk kuvvetlerine bildirim</li>
                    <li>• Kalıcı yasaklama</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Değişiklik ve Güncellemeler */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Değişiklik ve Güncellemeler</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-4">
              <p>
                2devo Digital, bu şartlar ve koşulları önceden haber vermeksizin değiştirme hakkını saklı tutar.
                Değişiklikler web sitesinde yayınlandığı anda yürürlüğe girer.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-blue-600/10 border border-blue-500/30 rounded-lg p-4">
                  <h4 className="text-blue-300 font-semibold mb-2">Bildirim</h4>
                  <p className="text-sm">Önemli değişiklikler e-posta ile bildirilir</p>
                </div>
                <div className="bg-green-600/10 border border-green-500/30 rounded-lg p-4">
                  <h4 className="text-green-300 font-semibold mb-2">Kabul</h4>
                  <p className="text-sm">Siteyi kullanmaya devam ederek kabul etmiş sayılırsınız</p>
                </div>
                <div className="bg-purple-600/10 border border-purple-500/30 rounded-lg p-4">
                  <h4 className="text-purple-300 font-semibold mb-2">Ret</h4>
                  <p className="text-sm">Kabul etmiyorsanız hizmet kullanımını durdurmalısınız</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* İletişim */}
          <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Sorularınız İçin</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Şartlar ve koşullar hakkında sorularınız veya açıklama talepleriniz için bizimle iletişime geçin.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-slate-300">
                <div>
                  <strong>E-posta:</strong> info@2devo.com
                </div>
                <div>
                  <strong>Telefon:</strong> 0530 729 6759
                </div>
              </div>
              <p className="text-sm text-slate-400 mt-4">Son güncelleme: {new Date().toLocaleDateString("tr-TR")}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}