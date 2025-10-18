import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function DataskyddspolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Dataskyddspolicy
          </h1>
          <p className="mt-6 text-lg leading-8 text-primary-100">
            Information om hur vi på Art of Dent behandlar dina personuppgifter
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          
          <p className="text-lg text-gray-700 mb-8">
            Art of Dent värnar om din integritet och är engagerade i att skydda dina personuppgifter. 
            Denna dataskyddspolicy förklarar hur vi samlar in, använder och skyddar din information i enlighet med 
            EU:s allmänna dataskyddsförordning (GDPR) och svensk lagstiftning.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Personuppgiftsansvarig</h2>
          <p className="text-gray-700 mb-6">
            Art of Dent är personuppgiftsansvarig för behandlingen av dina personuppgifter. 
            Om du har frågor om hur vi behandlar dina personuppgifter är du välkommen att kontakta oss:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="text-gray-700 mb-2"><strong>Art of Dent</strong></p>
            <p className="text-gray-700 mb-2">Hantverkaregatan 6D, 211 22 Malmö</p>
            <p className="text-gray-700 mb-2">Telefon: 040-121 108</p>
            <p className="text-gray-700">E-post: Artofdent.klinik@gmail.com</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vilka personuppgifter samlar vi in?</h2>
          <p className="text-gray-700 mb-4">Vi samlar in och behandlar följande personuppgifter:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li><strong>Identifikationsuppgifter:</strong> Namn, personnummer, adress, telefonnummer, e-postadress</li>
            <li><strong>Hälsouppgifter:</strong> Journalanteckningar, behandlingshistorik, röntgenbilder, medicinska bedömningar</li>
            <li><strong>Ekonomiska uppgifter:</strong> Faktureringsuppgifter, betalningshistorik</li>
            <li><strong>Bokningsuppgifter:</strong> Tidsbokning, behandlingstyp, tidigare besök</li>
            <li><strong>Tekniska uppgifter:</strong> IP-adress, cookies vid användning av vår webbplats</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför behandlar vi dina personuppgifter?</h2>
          <p className="text-gray-700 mb-4">Vi behandlar dina personuppgifter för följande ändamål:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li><strong>Patientvård:</strong> För att kunna ge dig tandvård och följa upp din behandling</li>
            <li><strong>Journalföring:</strong> Enligt patientdatalagen är vi skyldiga att föra patientjournal</li>
            <li><strong>Bokningar:</strong> För att administrera dina tidsbokningar och påminnelser</li>
            <li><strong>Fakturering:</strong> För att fakturera våra tjänster och hantera betalningar</li>
            <li><strong>Rättsliga krav:</strong> För att uppfylla våra lagstadgade skyldigheter</li>
            <li><strong>Kommunikation:</strong> För att kontakta dig om din behandling och viktiga meddelanden</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Laglig grund för behandling</h2>
          <p className="text-gray-700 mb-6">
            Vi behandlar dina personuppgifter baserat på:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li>Fullgörande av avtal när du bokar tid och genomgår behandling</li>
            <li>Rättslig förpliktelse enligt patientdatalagen och bokföringslagen</li>
            <li>Berättigat intresse för att utveckla och förbättra vår verksamhet</li>
            <li>Samtycke i vissa fall, t.ex. för marknadsföring</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Hur länge sparar vi dina uppgifter?</h2>
          <p className="text-gray-700 mb-6">
            Vi sparar dina personuppgifter så länge det är nödvändigt för de ändamål som beskrivs i denna policy:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li><strong>Patientjournal:</strong> Minst 10 år efter senaste anteckningen enligt patientdatalagen</li>
            <li><strong>Bokföringsmaterial:</strong> 7 år enligt bokföringslagen</li>
            <li><strong>Övriga uppgifter:</strong> Så länge det finns ett berättigat behov</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vem delar vi dina uppgifter med?</h2>
          <p className="text-gray-700 mb-6">
            Vi kan dela dina personuppgifter med:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li>Andra vårdgivare när det är nödvändigt för din vård (med ditt samtycke)</li>
            <li>Försäkringskassan och tandvårds- och läkemedelsförmånsverket</li>
            <li>Laboratorier för tandtekniska arbeten</li>
            <li>IT-leverantörer som hanterar våra journalsystem (personuppgiftsbiträden)</li>
            <li>Myndigheter när vi är skyldiga enligt lag</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Dina rättigheter</h2>
          <p className="text-gray-700 mb-4">Du har följande rättigheter enligt GDPR:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li><strong>Rätt till tillgång:</strong> Du har rätt att få en kopia av dina personuppgifter</li>
            <li><strong>Rätt till rättelse:</strong> Du kan begära att felaktiga uppgifter rättas</li>
            <li><strong>Rätt till radering:</strong> I vissa fall kan du begära att vi raderar dina uppgifter</li>
            <li><strong>Rätt till begränsning:</strong> Du kan begära att behandlingen begränsas</li>
            <li><strong>Rätt till dataportabilitet:</strong> Du kan få ut dina uppgifter i ett strukturerat format</li>
            <li><strong>Rätt att göra invändningar:</strong> Du kan invända mot viss behandling</li>
            <li><strong>Rätt att återkalla samtycke:</strong> När behandling baseras på samtycke kan du när som helst återkalla det</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Säkerhet</h2>
          <p className="text-gray-700 mb-6">
            Vi använder tekniska och organisatoriska säkerhetsåtgärder för att skydda dina personuppgifter mot 
            obehörig åtkomst, förlust eller manipulation. Detta inkluderar:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li>Kryptering av känslig data</li>
            <li>Säkra journalsystem med begränsad åtkomst</li>
            <li>Regelbundna säkerhetskopior</li>
            <li>Utbildning av personal i dataskydd</li>
            <li>Fysisk säkerhet i våra lokaler</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Cookies</h2>
          <p className="text-gray-700 mb-6">
            Vår webbplats använder cookies för att förbättra din användarupplevelse. Cookies är små textfiler 
            som lagras på din enhet. Vi använder cookies för:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li>Att webbplatsen ska fungera korrekt (nödvändiga cookies)</li>
            <li>Att analysera hur besökare använder webbplatsen (analysverktyg)</li>
            <li>Att förbättra användarupplevelsen</li>
          </ul>
          <p className="text-gray-700 mb-6">
            Du kan när som helst ändra dina cookie-inställningar i din webbläsare.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Klagomål</h2>
          <p className="text-gray-700 mb-6">
            Om du anser att vi behandlar dina personuppgifter på ett felaktigt sätt har du rätt att lämna in ett 
            klagomål till Integritetsskyddsmyndigheten (IMY):
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="text-gray-700 mb-2"><strong>Integritetsskyddsmyndigheten</strong></p>
            <p className="text-gray-700 mb-2">Box 8114, 104 20 Stockholm</p>
            <p className="text-gray-700 mb-2">Telefon: 08-657 61 00</p>
            <p className="text-gray-700">Webb: www.imy.se</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Ändringar i dataskyddspolicyn</h2>
          <p className="text-gray-700 mb-6">
            Vi kan komma att uppdatera denna dataskyddspolicy. Eventuella ändringar publiceras på denna sida. 
            Vi rekommenderar att du regelbundet läser igenom policyn för att hålla dig informerad om hur vi 
            skyddar dina personuppgifter.
          </p>
          <p className="text-gray-700 mb-6">
            <strong>Senast uppdaterad:</strong> Januari 2025
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Kontakta oss</h2>
          <p className="text-gray-700 mb-6">
            Om du har frågor om denna dataskyddspolicy eller hur vi behandlar dina personuppgifter, 
            vänligen kontakta oss:
          </p>
          <div className="bg-primary-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-2"><strong>E-post:</strong> Artofdent.klinik@gmail.com</p>
            <p className="text-gray-700 mb-2"><strong>Telefon:</strong> 040-121 108</p>
            <p className="text-gray-700"><strong>Adress:</strong> Hantverkaregatan 6D, 211 22 Malmö</p>
          </div>

        </div>

        {/* Back to home */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-primary-700 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-primary-800 transition-all"
          >
            Tillbaka till startsidan
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
