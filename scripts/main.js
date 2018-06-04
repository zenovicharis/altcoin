"use strict";
$(window).on("load", function () {
    function e() {
        var e = o.scrollTop(), t = D.$welcome, a = D.$whatWeDo, i = D.$howItWorks, n = D.$partners, s = D.$projects,
            r = D.$team, l = D.$map;
        h.removeClass("active"), e > t.offset().top && e < i.offset().top ? $("[data-to=what-we-do]").addClass("active") : e > a.offset().top && e < n.offset().top ? $("[data-to=how-it-works]").addClass("active") : e > i.offset().top && e < s.offset().top ? $("[data-to=partners]").addClass("active") : e > n.offset().top && e < r.offset().top ? $("[data-to=projects]").addClass("active") : e > s.offset().top && e < l.offset().top ? $("[data-to=team]").addClass("active") : e > r.offset().top && $("[data-to=map]").addClass("active")
    }
    function t(e, t) {
        if ("team" == e) x.find("img").remove(), u.text(i[t].name), p.text(i[t].role), f.text(i[t].text); else if ("how" == e) {
            x.find("img").remove();
            var n = $("<img>");
            n.attr("src", a[Number(t)].img), x.find(".modal__container").prepend(n), u.text(a[Number(t)].number), p.text(a[Number(t)].subtitle), f.text(a[Number(t)].text)
        }
        c.addClass("blocked"), m.fadeIn("400"), m.css("display", "flex")
    }

    var a = [{
            img: "../images/step-0.png",
            number: "1",
            subtitle: "Investor Interest",
            text: "Potential investor approaches us via phone call, email, WhatsApp or Telegram to invest in a portfolio of cryptocurrencies."
        }, {
            img: "../images/step-1.png",
            number: "2",
            subtitle: "Due Diligence",
            text: "Altcoinomy undertakes strict KYC procedure and makes sure the investor is AML compliant."
        }, {
            img: "../images/step-2.png",
            number: "3",
            subtitle: "Investment Decision",
            text: "We inform the client about the risks of investing in a market that is several orders of magnitude more volatile than traditional equity market. We let him know about our long-term value-investing philosophy when it comes to cryptocurrency. We stress that we do not encourage active trading, and instead value a buy and hold attitude.On this basis, the client decides on its portfolio allocation."
        }, {
            img: "../images/step-3.png",
            number: "4",
            subtitle: "Cash​ ​Wire",
            text: "The investor wires the funds to Altcoinomy’s account at a private bank in Geneva.The funds wired can be denominated in typical currencies such as USD, EUR, CHF and GBP as well as CAD, JPY NOK, AUD, NZD, ILS, PLN, SGD, TRY, and ZAR. Funds are only transiting and do not stay overnight on the account; the cut-off are quite stricts."
        }, {
            img: "../images/step-4.png",
            number: "5",
            subtitle: "Private keys are delivered",
            text: "Altcoinomy will send a USB stick containing the client’s private keys via DHL in a sealed envelop. All pieces of information are sent via registered mail for the investor’s safekeeping."
        }, {
            img: "../images/step-5.png",
            number: "6",
            subtitle: "Cash to Bitcoin",
            text: "After price disclosure and agreement with the investor, fiat currencies are exchanged against bitcoins."
        }, {
            img: "../images/step-6.png",
            number: "7",
            subtitle: "Bitcoins To Altcoin",
            text: "After price disclosure and agreement with the investor, bitcoins are converted to altcoins according to the signed portfolio allocation."
        }, {
            img: "../images/step-7.png",
            number: "8",
            subtitle: "Securisation to Transit Wallet on The Blockchain",
            text: "As soon as the altcoins are sourced, they are pulled off the exchange to limit the exposure, and they are secured on the blockchain into dedicated transit wallets."
        }, {
            img: "../images/step-8.png",
            number: "9",
            subtitle: "Investor confirms reception and integrity of seal",
            text: "Upon receipt of the SWIFT relating to the funds transfer, Altcoinomy creates the client’s wallets and sends the private keys to the client by sealed postal mail."
        }, {
            img: "../images/step-9.png",
            number: "10",
            subtitle: "Segregation",
            text: "Once the client confirms that he/she has received the sealed postal mail with the private keys and that the seal has not been tampered with, the cryptocurrencies are transferred into the investor’s personal crypto address."
        }, {
            img: "../images/step-10.png",
            number: "11",
            subtitle: "Portfolio is setup in a tracking application",
            text: "Altcoinomy will help the investor install a tracking app to follow the variations of his portfolio in real time."
        }], i = {
            Olivier: {
                name: "Olivier​ ​Cohen",
                role: "Founder,​ ​C.O.O",
                text: "Olivier has worked at MKS Finances as an option trader for precious metals, then at JP Morgan as a risk manager for exotic credit derivatives. He later joined CAPLAND S.A. to manage the portfolio of high net worth individuals. Olivier is an early adopter of digital ledger technologies and a crypto enthusiast."
            },
            Konstantinos: {
                name: "Constantinos​ ​Lanaras",
                role: "Co-Founder, C.E.O",
                text: "Constantin studied management and international relations at Webster University. He worked in the banking industry with HSBC and specialized in alternative fund management at Capital Management Advisors SA (EFG Group) before joining Capland SA. He drew on his extensive expertise when co-founding Altcoinomy SA, a pioneering company that breaks down the barrier between traditional banking and the world of cryptocurrencies."
            },
            Constantin: {
                name: "Constantin Papadimitriou",
                role: "Chairman",
                text: "Constantin is the driving force behind the development and management of a globally diversified investment portfolio that currently ranks in the top quartile of the Cambridge Endowment Universe. A graduate of the University of Geneva, he is now president and CEO of Diorasis International SA and General Oriental Investments SA. His dealmaking experience and industry contacts represent invaluable assets for Altcoinomy SA."
            },
            Ricardo: {
                name: "Ricardo Mastrangelo",
                role: "Analyst​ ​&​ ​Relationship​ ​Manager",
                text: "Ricardo has been interested in digital currencies since 2015 and has grown an interest in altcoin researching. He has launched his own app, Shinrai prior to joining Altcoinomy. Ricardo speaks 7 languages, including the Japanese, and manages the relationships with our clients base."
            },
            Afsaneh: {
                name: "Afsaneh Heyat",
                role: "ICO​ ​Structurer",
                text: "Afsaneh has over 15 years of experience in structuring and syndicating leverage buyouts as well as having run her own origination platform from 2004-2007, focused on sourcing deals in emerging markets. In addition, she has in-depth knowledge and experience in areas such as fine wines, collectible watches, and fine art."
            },
            Marie: {
                name: "Marie-Elise Liechti",
                role: "Compliance Officer",
                text: "Marie-Elise has over 20 years of experience in making sure that our traditional business is compliant with all the regulations regarding KYC and anti-money laundering."
            },
            Ouriel: {
                name: "Ouriel Amsellem",
                role: "Business Introducer",
                text: "Ouriel has worked in both the finance as well as the diamond / rare earth industries. While a 2005 graduate of Ecole ESC Reims (France) in Applied Economics, he decided to pursue his passion in diamonds by becoming a certified gemologist in 2009 in Geneva. Since 2012, he has founded and operated ANACO Resources, a company focused on rare earth mining in Africa. The combination of finance, gems, and his interest in cryptocurrencies make Ouriel an asset in growing the client base of Altcoinomy SA."
            },
            Nathalie: {
                name: "Nathalie Barzilay",
                role: "Legal Advisor & Business Manager",
                text: "Nathalie studied at the University of Geneva where she graduated with a Master’s in Business Law. After passing the Geneva bar exam, she worked several years for Lenz & Staehellin, the largest law firm in Switzerland, where she specialized in banking and regulatory matters, including FINMA authorization process for clients. Nathalie is a GIA-Graduate Gemologist and studied Art as an Alternative Investment at the Sotheby’s Institute of Art."
            },
            Noe: {
                name: "Noé Curtz",
                role: "External​ ​Security​ ​Officer",
                text: "Noé has been involved in cryptocurrencies since the early days. At Altcoinomy, he is responsible for designing of internal crypto processes with best-practices security protocols. Noé holds a PhD in Physics from the University of Geneva."
            },
            Adi: {
                name: "Adi​ ​Somech",
                role: "Execution​ ​Trader​ ​",
                text: "Adi has personal extensive experience as an investor and trader of cryptocurrencies. In addition, he is an Israeli lawyer, having worked with international and domestic companies as well as high net worth individuals in civil matters."
            },
            Gregory: {
                name: "Gregory​ ​Lanaras,",
                role: "Marketing​ ​Coordinator",
                text: " "
            },
            Jean: {
                name: "Jean-Marc Seigneur",
                role: "Blockchain Engineer / Consultant",
                text: "Dr. Jean-Marc is recognised globally as a leader on computational trust and online reputation management, having published over 100 scientific papers on the subject. With a Ph.D. in Computer Science from Trinity College Dublin in 2005, Jean-Marc has managed several EU- funded multi-million R&D e-reputation projects at the University of Geneva. Since 2016, he has started to apply online reputation management to the fintech world as Chief Reputation Officer of “GLOBCOIN” and as member of the ITU standardization groups on trust and digital currency including digital fiat currency."
            }
        }, n = $(document), o = $(window), s = $("nav"), r = $(".hamburger"), l = $(".menu"), c = $("html, body"),
        d = $(".menu__close"), h = $("[data-to]"), m = $("#modal"), u = m.find(".modal__title"),
        p = m.find(".subtitle"), f = m.find(".text"), g = $("[data-member]"), v = $(".modal__close"),
        b = $("[data-step]"), w = $("body"), y = $(".team__skew-bottom__button"), k = $(".team__inner"),
        x = $(".modal__box"), C = $("#modal_form"), A = $(".js-open-modal-form"), D = {
            $welcome: $(".welcome-view"),
            $whatWeDo: $(".what-we-do"),
            $howItWorks: $(".how-it-works"),
            $partners: $(".partners"),
            $projects: $(".projects"),
            $team: $(".team"),
            $map: $(".map")
        };
    A.click(function (e) {
        e.preventDefault(), c.addClass("blocked"), C.fadeIn("400"), C.css("display", "flex")
    });
    var O = !1;
    n.scroll(function () {
        e(), o.scrollTop() > s.height() && !O ? s.css("transform", "translateY(-100%)") : o.scrollTop() < s.height() && s.css("transform", "translateY(0)"), o.scrollTop() > D.$welcome.height() && !O ? (O = !0, s.addClass("sticky")) : o.scrollTop() < D.$welcome.height() && (O = !1, s.removeClass("sticky"))
    }), r.click(function (e) {
        s.css("z-index", "1"), e.preventDefault(), c.addClass("blocked"), l.css("z-index", "100"), l.addClass("shown")
    }), d.click(function (e) {
        e.preventDefault(), c.removeClass("blocked"), l.removeClass("shown"), l.css("z-index", "-1"), s.css("z-index", "100")
    }), h.click(function (e) {
        e.preventDefault();
        var t = $(this).data().to;
        c.removeClass("blocked"), l.removeClass("shown"), setTimeout(function () {
            c.animate({scrollTop: $("." + t).offset().top - s.height()}, 600)
        }, 400), l.css("z-index", "-1"), s.css("z-index", "100")
    }), g.click(function (e) {
        e.preventDefault(), t("team", $(this).data("member"))
    }), v.click(function (e) {
        e.preventDefault(), m.fadeOut("400"), c.removeClass("blocked")
    }), $(".modal").click(function (e) {
        "modal" !== e.target.id && "modal_form" !== e.target.id || ($(".modal").fadeOut("400"), c.removeClass("blocked"))
    }), b.click(function (e) {
        e.preventDefault(), t("how", $(this).data("step"))
    }), window.innerWidth > 1080 && ($(".no-mobile [data-step]").each(function (e) {
        var t = '<div class="tooltip tooltip-' + e + '">Click to learn more</div>';
        w.append(t), $(".tooltip-" + e).css({top: $(this).offset().top, left: $(this).find("path.st42").offset().left})
    }), b.hover(function () {
        var e = Number($(this).data("step"));
        $(".tooltip-" + e).addClass("visible")
    }, function () {
        $(".tooltip").removeClass("visible")
    })), y.click(function (e) {
        e.preventDefault(), k.css("max-height", "7000px"), y.fadeOut("400")
    })
});