export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50 text-slate-900">
      <main className="mx-auto flex min-h-screen max-w-4xl flex-col gap-16 px-6 py-20 lg:px-12">
        <header className="flex flex-col gap-6 rounded-3xl bg-white p-10 shadow-xl shadow-amber-900/10 lg:p-14">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
            Российское право
          </span>
          <h1 className="text-3xl font-bold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Сроки вступления в наследство и получения имущественного налогового
            вычета: в чём ключевые различия
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-700">
            Ниже — детальное сравнение сроков и этапов, чтобы легко ориентироваться в
            двух разных процедурах: принятии наследства по закону и оформлении
            имущественного налогового вычета при покупке недвижимости.
          </p>
        </header>

        <section className="grid gap-8 rounded-3xl border border-amber-200 bg-white p-10 shadow-xl shadow-amber-900/5 lg:grid-cols-[1.2fr_1fr] lg:p-14">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              Наследство по закону
            </h2>
            <ul className="space-y-4 text-base leading-7 text-slate-700">
              <li>
                <strong className="font-semibold text-slate-950">
                  Старт отсчёта:
                </strong>{" "}
                день открытия наследства (обычно дата смерти наследодателя) или решение
                суда о признании умершим.
              </li>
              <li>
                <strong className="font-semibold text-slate-950">
                  Базовый срок:
                </strong>{" "}
                6 месяцев на подачу нотариального заявления о принятии наследства или на
                фактическое вступление (ст. 1154 ГК РФ).
              </li>
              <li>
                <strong className="font-semibold text-slate-950">
                  Продление:
                </strong>{" "}
                возможно через суд, если срок пропущен по уважительным причинам, либо
                при согласии остальных наследников.
              </li>
              <li>
                <strong className="font-semibold text-slate-950">
                  Последствия пропуска:
                </strong>{" "}
                права утрачиваются, пока суд не восстановит срок; имущество может быть
                распределено между другими наследниками.
              </li>
            </ul>
          </div>
          <aside className="flex flex-col justify-between rounded-2xl bg-amber-500/10 p-6 text-sm text-amber-900">
            <div className="space-y-3">
              <h3 className="text-base font-semibold uppercase tracking-wide">
                Ключевые даты
              </h3>
              <p>
                <span className="font-medium">0–6 месяцев:</span> обращение к нотариусу,
                сбор документов, заявление о принятии наследства.
              </p>
              <p>
                <span className="font-medium">После 6 месяцев:</span> выдача
                свидетельства и регистрация прав в Росреестре.
              </p>
            </div>
            <p className="rounded-xl bg-white/60 p-3">
              Восстановление пропущенного срока возможно только через суд или при
              письменном согласии всех уже вступивших наследников.
            </p>
          </aside>
        </section>

        <section className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-10 shadow-xl shadow-slate-900/5 lg:grid-cols-[1.2fr_1fr] lg:p-14">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              Имущественный налоговый вычет
            </h2>
            <ul className="space-y-4 text-base leading-7 text-slate-700">
              <li>
                <strong className="font-semibold text-slate-950">
                  Старт отсчёта:
                </strong>{" "}
                год, в котором возникло право на вычет (зарегистрировано право
                собственности либо подписан акт при долевом строительстве).
              </li>
              <li>
                <strong className="font-semibold text-slate-950">
                  Период подачи:
                </strong>{" "}
                декларацию 3-НДФЛ можно подать в течение трёх лет после окончания
                налогового периода. На практике подавать можно и позже: право на вычет
                не сгорает, но можно вернуть НДФЛ только за последние три года.
              </li>
              <li>
                <strong className="font-semibold text-slate-950">
                  Форматы оформления:
                </strong>{" "}
                через инспекцию ФНС (3-НДФЛ) или через работодателя по уведомлению
                из ФНС — без ограничения конкретным месяцем.
              </li>
              <li>
                <strong className="font-semibold text-slate-950">
                  Последствия пропуска:
                </strong>{" "}
                деньги не теряются, но налог вернуть можно только за три последних года;
                более ранние суммы «сгорают».
              </li>
            </ul>
          </div>
          <aside className="flex flex-col justify-between rounded-2xl bg-slate-900 text-slate-100">
            <div className="space-y-4 p-6">
              <h3 className="text-base font-semibold uppercase tracking-wide text-amber-200">
                Важные ориентиры
              </h3>
              <p>
                <span className="font-medium text-white">Год покупки:</span> формирует
                право на вычет. Декларацию можно подавать с 1 января следующего года.
              </p>
              <p>
                <span className="font-medium text-white">3 года:</span> период, за
                который реально вернуть НДФЛ разово. Остаток можно переносить на
                последующие годы.
              </p>
            </div>
            <p className="rounded-b-2xl bg-slate-800 p-6 text-sm text-amber-200">
              Если доходов в конкретном году мало, остаток вычета переносится на
              последующие годы до полного использования лимита.
            </p>
          </aside>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-10 shadow-xl shadow-slate-900/5 lg:p-14">
          <h2 className="text-2xl font-semibold text-slate-900">
            Главное различие по срокам
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-amber-500/10 p-6">
              <h3 className="text-lg font-semibold text-amber-900">
                Наследство
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-700">
                Жёсткий шестимесячный срок, привязанный к дате смерти. Пропустили —
                нужны уважительные причины и решение суда.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-6">
              <h3 className="text-lg font-semibold text-amber-200">
                Налоговый вычет
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-200">
                Гибкие сроки: подать можно в любой момент после возникновения права,
                но вернуть НДФЛ получится только за последние три года.
              </p>
            </div>
          </div>
          <p className="mt-8 max-w-3xl text-base leading-7 text-slate-700">
            Таким образом, процедура наследования требует оперативных действий и
            соблюдения строгого шестимесячного периода, тогда как имущественный
            вычет допускает подачу документов спустя годы, ограничивая только
            период, за который можно вернуть налог.
          </p>
        </section>
      </main>
    </div>
  );
}
