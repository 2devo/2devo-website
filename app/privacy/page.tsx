import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Eye, Lock, UserCheck, FileText, Phone } from "lucide-react"

export default function PrivacyPage() {
  const sections = [
    {
      icon: Eye,
      title: "Toplanan Bilgiler",
      content: [
        "Ad, soyad ve iletişim bilgileriniz",
        "E-posta adresi ve telefon numaranız",
        "Şirket bilgileri (varsa)",
        "Hizmet talepleriniz ve proje detayları",
        "Web sitesi kullanım verileri (çerezler aracılığıyla)",
        "IP adresi ve tarayıcı bilgileri",
      ],
    },
    {
      icon: UserCheck,
      title: "Bilgilerin Kullanım Amacı",
      content: [
        "Size hizmet sunmak ve iletişim kurmak",
        "Teklif hazırlamak ve proje yönetimi yapmak",
        "Müşteri destek hizmetleri sağlamak",
        "Yasal yükümlülüklerimizi yerine getirmek",
        "Web sitesi performansını iyileştirmek",
        "Pazarlama faaliyetleri (onayınız dahilinde)",
      ],
    },
    {
      icon: Lock,
      title: "Bilgi Güvenliği",
      content: [
        "Verileriniz SSL şifreleme ile korunmaktadır",
        "Sadece yetkili personelimiz verilerinize erişebilir",
        "Düzenli güvenlik güncellemeleri yapılmaktadır",
        "Veri yedekleme sistemleri kullanılmaktadır",
        "Güvenlik ihlali durumunda derhal bilgilendirilirsiniz",
      ],
    },
    {
      icon: FileText,
      title: "Veri Saklama Süresi",
      content: [
        "Müşteri verileri: Hizmet süresi + 10 yıl",
        "İletişim kayıtları: 3 yıl",
        "Web sitesi analitik verileri: 2 yıl",
        "Pazarlama verileri: İzin süresi boyunca",
        "Yasal zorunluluk gerektiren veriler: İlgili mevzuat süresi",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-600/20 text-blue-300 border-blue-500/30">Gizlilik</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Gizlilik
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Sözleşmesi
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
              Kişisel verilerinizin korunması bizim için önceliklidir. KVKK kapsamında haklarınız ve sorumluluklarımız
              hakkında detaylı bilgi.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-24">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Genel Bilgi */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <CardTitle className="text-2xl text-white">Genel Bilgiler</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-4">
              <p>
                2devo Digital olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında kişisel
                verilerinizin güvenliğini sağlamak ve gizliliğinizi korumak en önemli önceliğimizdir.
              </p>
              <p>
                Bu gizlilik sözleşmesi, web sitemizi ziyaret ettiğinizde, hizmetlerimizden yararlandığınızda veya
                bizimle iletişime geçtiğinizde kişisel verilerinizin nasıl toplandığı, işlendiği, saklandığı ve
                korunduğu hakkında bilgi vermektedir.
              </p>
              <div className="bg-blue-600/10 border border-blue-500/30 rounded-lg p-4 mt-6">
                <p className="text-blue-300">
                  <strong>Veri Sorumlusu:</strong> 2devo Digital
                  <br />
                  <strong>Adres:</strong> Sakarya, Türkiye
                  <br />
                  <strong>E-posta:</strong> info@2devo.com
                  <br />
                  <strong>Telefon:</strong> 0530 729 6759
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

          {/* KVKK Hakları */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center">
                  <UserCheck className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-2xl text-white">KVKK Kapsamındaki Haklarınız</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-4">
              <p>KVKK'nın 11. maddesi uyarınca aşağıdaki haklarınız bulunmaktadır:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="text-white font-semibold">Temel Haklar</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                    <li>• İşlenen kişisel verileriniz hakkında bilgi talep etme</li>
                    <li>• İşleme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                    <li>• Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-semibold">Düzeltme ve Silme Hakları</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      • Kişisel verilerin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme
                    </li>
                    <li>• Kişisel verilerin silinmesi veya yok edilmesini isteme</li>
                    <li>
                      • Düzeltme ve silme işlemlerinin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini
                      isteme
                    </li>
                    <li>
                      • İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin
                      aleyhine bir sonucun ortaya çıkmasına itiraz etme
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Çerezler */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Çerez Politikası</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-4">
              <p>
                Web sitemizde kullanıcı deneyimini iyileştirmek için çerezler kullanılmaktadır. Çerezler, web
                tarayıcınız tarafından bilgisayarınızda saklanan küçük metin dosyalarıdır.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-2">Kullandığımız Çerez Türleri</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Zorunlu çerezler (site işlevselliği)</li>
                    <li>• Analitik çerezler (Google Analytics)</li>
                    <li>• Performans çerezler (sayfa yükleme hızı)</li>
                    <li>• Fonksiyonel çerezler (kullanıcı tercihleri)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Çerez Yönetimi</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Tarayıcı ayarlarından çerezleri devre dışı bırakabilirsiniz</li>
                    <li>• Mevcut çerezleri silebilirsiniz</li>
                    <li>• Çerez tercihlerinizi istediğiniz zaman değiştirebilirsiniz</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* İletişim */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg backdrop-blur-sm">
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Bizimle İletişime Geçin</h3>
              </div>
              <p className="text-slate-300 mb-6">
                KVKK haklarınızı kullanmak veya gizlilik politikamız hakkında sorularınız için bizimle iletişime
                geçebilirsiniz.
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}