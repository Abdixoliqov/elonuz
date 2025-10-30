import React from 'react';

// Ommaviy oferta - Elon.uz uchun Tailwind CSS bilan yozilgan JSX komponenti
// Eslatma: quyidagi maydonlarni (yuridik ma'lumotlar, STIR, hisob raqami va boshqalar)
// o'zingizning kompaniya ma'lumotlari bilan almashtiring.

export default function ElonOferta() {
  return (
    <article className="prose lg:prose-lg max-w-5xl mx-auto p-6 bg-white rounded-2xl shadow-sm my-8">
      <header>
        <h1 className="text-2xl font-semibold">Ommaviy oferta</h1>
        <p className="text-sm text-slate-600">Elon.uz e’lonlar joylashtirish platformasi uchun shartnoma</p>
      </header>

      <section>
        <h2>1. UMUMIY QOIDALAR</h2>
        <ol className="list-decimal pl-6">
          <li>
            <p>
              <strong>1.1.</strong> Quyidagi hujjat — <em>ommaviy oferta</em> (keyingi o'rinlarda "Oferta") Elon.uz
              platformasiga e’lon joylashtirish xizmatlarini taqdim etuvchi yuridik shaxs tomonidan jismoniy
              shaxslarga onlayn tarzda taqdim etilayotgan umumiy taklifdir. Ushbu Oferta shartlarini qabul qilgan
              (aksept) foydalanuvchi bilan shartnoma tuzilgan hisoblanadi.
            </p>
            <p className="mt-2 text-sm text-slate-600">Eslatma: quyidagi yuridik ma'lumotlarni to'ldiring:</p>
            <ul className="list-disc pl-6 text-sm text-slate-600">
              <li>Yuridik nomi: <strong>[YURIDIK_NOM]</strong></li>
              <li>Manzil: <strong>[MANZIL]</strong></li>
              <li>STIR: <strong>[STIR]</strong></li>
              <li>Hisob raqami: <strong>[HISOB_RAQAMI]</strong></li>
              <li>Elektron pochta: <strong>[EMAIL]</strong></li>
            </ul>
          </li>

          <li>
            <p>
              <strong>1.2.</strong> Ushbu Oferta Elon.uz orqali e’lon joylashtirish, e’lonni ko’rish va reklama
              qilish xizmatlariga doir shartlarni belgilaydi. Bundan keyin matnda "Shartnoma" va "Oferta" atamalari
              bir xil ma'noda ishlatiladi.
            </p>
          </li>

          <li>
            <p>
              <strong>1.3.</strong> Oferta shartlari va Platforma tomonidan belgilangan qoidalar foydalanuvchilar uchun
              majburiy hisoblanadi.
            </p>
          </li>

          <li>
            <p>
              <strong>1.4.</strong> Foydalanuvchi elon.uz saytida ro'yxatdan o'tganda va/ yoki e’lon joylashtirish uchun
              to'lovni amalga oshirganda, u ushbu Oferta shartlarini qabul qilgan (aksept) hisoblanadi va Shartnoma kuchga
              kiradi.
            </p>
          </li>
        </ol>
      </section>

      <section>
        <h2>2. ATAMALAR</h2>
        <p className="mt-2">Ushbu shartnomada ishlatilgan asosiy atamalar quyidagicha talqin qilinadi:</p>
        <ul className="list-disc pl-6">
          <li><strong>Elon.uz / Platforma</strong> — e’lonlarni joylashtirish va ko’rsatish xizmatlarini taqdim etuvchi veb-sayt (domain: <code>elon.uz</code>).</li>
          <li><strong>Foydalanuvchi</strong> — elon.uz saytida ro'yxatdan o'tgan va Oferta shartlarini qabul qilgan jismoniy shaxs.</li>
          <li><strong>E’lon</strong> — foydalanuvchi tomonidan Platformaga joylashtiriladigan har qanday matn, rasm, video yoki boshqa kontent.</li>
          <li><strong>Shaxsiy kabinet</strong> — foydalanuvchiga Platformada berilgan va u orqali e’lonlarni boshqarish imkonini beruvchi hisob.</li>
          <li><strong>Xizmatlar</strong> — e’lon joylashtirish, e’lonlarni targ‘ib qilish, premium joylashuvlar va boshqa Platforma taklif etadigan xizmatlar.</li>
        </ul>
      </section>

      <section>
        <h2>3. SHARTNOMA TUZISH TARTIBI</h2>
        <ol className="list-decimal pl-6">
          <li>
            <p>
              <strong>3.1.</strong> Oferta matni elon.uz saytida doimiy ravishda joylashtiriladi va foydalanuvchi ro'yxatdan
              o'tish vaqtida ushbu shartlarni ko'rib, qabul qilishi kerak.
            </p>
          </li>

          <li>
            <p>
              <strong>3.2.</strong> O’zbekiston Respublikasi Fuqarolik Kodeksining tegishli moddalariga muvofiq, foydalanuvchi
              tomonidan quyidagi harakatlar Oferta qabul qilinishini bildiradi:
            </p>
            <ul className="list-disc pl-6">
              <li>elon.uz saytida ro'yxatdan o'tish;</li>
              <li>tanlangan e’lon uchun to'lovni amalga oshirish (agar to'lov talabi mavjud bo'lsa).</li>
            </ul>
          </li>
        </ol>
      </section>

      <section>
        <h2>4. SHARTNOMA PREDMETI</h2>
        <p>
          <strong>4.1.</strong> Platforma foydalanuvchi arizasiga binoan tanlangan paket yoki toifadagi e’lonni sayt
          qoidalari va e’lon sahifasida ko'rsatilgan shartlar asosida joylashtirish va ko'rsatishni ta'minlaydi. Foydalanuvchi
          ushbu xizmat uchun to'lovni amalga oshirish majburiyatini oladi.
        </p>
      </section>

      <section>
        <h2>5. FOYDALANUVCHI VA PLATFORMANING MAJBURIYATLARI</h2>
        <div className="pl-4">
          <h3 className="font-medium">5.1. Foydalanuvchining huquq va majburiyatlari</h3>
          <ol className="list-decimal pl-6">
            <li>Platforma orqali sotib olingan xizmatlardan belgilangan muddat davomida foydalanish huquqiga ega bo'lish.</li>
            <li>Oferta shartlari bilan tanishish va ularga rioya qilish.</li>
            <li>E’lon materiallarini qonunga xilof maqsadlarda ishlatmaslik va uchinchi shaxslarga zarar yetkazmaslik.</li>
            <li>Sayt qoidalariga zid bo‘lgan kontentni joylashtirmaslik (fonni buzuvchi, pornografik, haqoratli, noqonuniy va hokazo).</li>
            <li>O'z e’lonlari uchun mutlaq huquqga ega emasligi, agar ular uchinchi shaxs intellektual mulkini buzsa, javobgarlik foydalanuvchida bo‘ladi.</li>
          </ol>

          <h3 className="font-medium mt-4">5.2. Platformaning huquq va majburiyatlari</h3>
          <ol className="list-decimal pl-6">
            <li>Platforma sayt va xizmatlarni taqdim etadi, e’lonlarni belgilangan tartibda joylashtiradi.</li>
            <li>Platforma texnik nosozliklarni bartaraf etish uchun choralar ko‘radi.</li>
            <li>Foydalanuvchilarning shaxsiy ma'lumotlarini qonun talablariga muvofiq muhofaza qiladi.</li>
            <li>Platforma zarur hollarda e’lonlarni ko‘rsatishni cheklash yoki o‘chirish huquqiga ega (qoidabuzarlik holatlarida).</li>
          </ol>
        </div>
      </section>

      <section>
        <h2>6. XIZMAT KO'RSATISH TARTIBI</h2>
        <ol className="list-decimal pl-6">
          <li>Oferta qabul qilingach, foydalanuvchi tomonidan to'lov amalga oshirilganida e’lon joylashtirish imkoniyati taqdim etiladi.</li>
          <li>Platforma xizmatlari sayt, shaxsiy kabinet va boshqa tegishli dasturiy ta'minot orqali ko'rsatiladi.</li>
          <li>E’lon paketlari va muddatlari saytda ko'rsatilgan bo'ladi. Bir martalik to'lov odatda belgilangan muddat davomida e’lonni ko'rsatish huquqini beradi.</li>
          <li>Platforma yordam xizmati ish vaqti va aloqa vositalari saytda ko'rsatiladi.</li>
        </ol>
      </section>

      <section>
        <h2>7. MABLAĞ VA TO'LOV SHARTLARI</h2>
        <ol className="list-decimal pl-6">
          <li>Har bir e’lon paketi va uning narxi saytning tegishli bo'limida ko'rsatiladi.</li>
          <li>Foydalanuvchi tanlangan xizmat uchun to'lovni to'liq oldindan amalga oshiradi. To'lovlar onlayn to'lov tizimlari orqali qabul qilinadi.</li>
          <li>Agar foydalanuvchi to'lovni amalga oshirmasa, Platforma xizmatlarni taqdim etmaslik huquqiga ega.</li>
          <li>To'langan mablag'lar qoidalar va qaytarib berish siyosatiga muvofiq qaytarilishi mumkin; maxsus holatlar sahifada yoki shartnomada alohida ko'rsatiladi.</li>
        </ol>
      </section>

      <section>
        <h2>8. TOMONLAR JAVOBGARLIGI</h2>
        <p>
          <strong>8.1.</strong> Platforma o'z majburiyatlarini buzgan taqdirda, O'zbekiston Respublikasining amaldagi qonunlari
          va ushbu Shartnomada belgilangan tartibda javobgarlikni o'z zimmasiga oladi.
        </p>
        <p>
          <strong>8.2.</strong> Agar foydalanuvchi Shartnoma yoki qonun talablarini buzsa, Platforma foydalanuvchi shaxsiy
          kabinetini bloklashi yoki e’lonlarni o‘chirish huquqiga ega.
        </p>
        <p>
          <strong>8.3.</strong> Platforma texnik va tashqi omillarga bog'liq xizmat ko'rsatilishi bilan bog'liq xatoliklar uchun
          to'liq kafolat bermaydi (aloqa operatorlari, to'lov tizimlari va h.k.).
        </p>
      </section>

      <section>
        <h2>9. NIZOLARNI HAL ETISH TARTIBI</h2>
        <p>
          <strong>9.1.</strong> Tomonlar har qanday nizolarni muzokaralar orqali hal qilishga harakat qiladi. Agar 30 (o'ttiz)
          kun ichida kelishuvga erishilmasa, nizolar amaldagi qonunchilikka muvofiq Platforma joylashgan hududdagi sud
          organlarida ko'rib chiqiladi.
        </p>
      </section>

      <section>
        <h2>10. FORS-MAJOR</h2>
        <p>
          <strong>10.1.</strong> Fors-major — tomonlarning nazorati ostida bo'lmagan hodisalar (urush, tabiiy ofatlar, hukumat
          qarorlari, ish tashlashlar va hokazo). Bunday holatda tomonlar o'z majburiyatlarini bajarishdan vaqtincha ozod
          bo'lishi mumkin va bu haqida boshqa tomonni ogohlantirishi lozim.
        </p>
      </section>

      <section>
        <h2>11. YAKUNIY QOIDALAR</h2>
        <ol className="list-decimal pl-6">
          <li>Tomonlar elektron pochta va shaxsiy kabinet yozuvlarini hujjat almashishning vakolatli manbasi sifatida qabul qiladi.</li>
          <li>Tomonlar vakolatli elektron pochta manzillarini sayt orqali e'lon qiladi: platforma uchun <code>[EMAIL]</code>, foydalanuvchi uchun esa ro'yxatdagi elektron pochta.</li>
          <li>Tomonlar maxfiylik va hisobga oid ma'lumotlarni himoya qilish majburiyatini oladi.</li>
        </ol>
      </section>

      <section>
        <h2>12. SHARTNOMA SHARTLARINI O'ZGARTIRISH</h2>
        <p>
          <strong>12.1.</strong> Platforma bir tomonlama ravishda Oferta shartlarini o'zgartirish huquqiga ega; o'zgartirishlar
          saytda e'lon qilingandan so'ng kuchga kiradi. O'zgartirishlar e'lon qilingandan oldin amalga oshirilgan to'lovlar
          eski shartlar bo'yicha xizmat muddatlari tugaguncha qo'llanadi.
        </p>
      </section>

      <section>
        <h2>13. SHARTNOMA MUDDATI</h2>
        <p>
          <strong>13.1.</strong> Ushbu Shartnoma uning aksept qilingani va foydalanuvchi hamda Platforma o'rtasidagi majburiyatlar
          bajarilib tugaguncha yoki shartnoma bekor qilinguncha amal qiladi.
        </p>
      </section>

      <footer className="mt-6 text-sm text-slate-600">
        <p>Huquqiy maslahat o'rniga emas — agar huquqiy jihatdan aniq va moslashtirilgan hujjat kerak bo'lsa, yuridik maslahatchiga murojaat qiling.</p>
        <p className="mt-2">Iltimos, yuqoridagi <code>[YURIDIK_NOM]</code>, <code>[MANZIL]</code>, <code>[STIR]</code>, <code>[HISOB_RAQAMI]</code> va <code>[EMAIL]</code> maydonlarini to'ldiring.</p>
      </footer>
    </article>
  );
}
