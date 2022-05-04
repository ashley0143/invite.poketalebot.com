if (location.hostname === "invite-tracker.poketalebot.com") {
  function getParameterByName(name) {
    var match = RegExp("[?&]" + name + "=([^&]*)").exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, " "));
  }
  if (getParameterByName("type") == "add-bot") {
    location.href =
      "https://discord.com/oauth2/authorize?client_id=591644019700924426&scope=applications.commands%20bot&permissions=8&redirect_uri=https%3A%2F%2Fpoketalebot.com%2Fthx&response_type=code";
  }
  if (getParameterByName("type") == "add-bot-telegram") {
    location.href = "https://t.me/poketalebot";
  }
  if (getParameterByName("atb") == "t") {
    /*! Poketale anyltics snippet (minified) | Copyright (C) 2021-2022 Ashley | https://github.com/iamashley0/poketale-anylitcs-snippet | http://mozilla.org/MPL/2.0/ */
    function t(t, n) {
      let o =
        t ||
        navigator.doNotTrack ||
        window.doNotTrack ||
        navigator.msDoNotTrack;
      const e = n || navigator.userAgent;
      const i = ["Windows NT 6.1", "Windows NT 6.2", "Windows NT 6.3"];
      const r = e.match(/Firefox\/(\d+)/);
      const s = /MSIE|Trident/i;
      const c = s.test(e);
      const a = e.match(/Windows.+?(?=;)/g);
      if (c && typeof Array.prototype.indexOf !== "function") {
        return false;
      } else if (r && parseInt(r[1], 10) < 32) {
        o = "Unspecified";
      } else if (c && a && i.indexOf(a.toString()) !== -1) {
        o = "Unspecified";
      } else {
        o = { 0: "Disabled", 1: "Enabled" }[o] || "Unspecified";
      }
      return o === "Enabled" ? true : false;
    }
    function u() {
      const t = ["source", "campaign", "content", "term", "medium"];
      const n = new URLSearchParams(window.location.search);
      t.forEach((t) => {
        if (!n.has(`utm_${t}`)) {
          n.append(`utm_${t}`, "fpn-default");
        }
      });
      n.set("entrypoint", "fpn-site-visit");
      n.set("form_type", "button");
      return n;
    }
    function p(t) {
      window.t = t;
    }
    async function n() {
      let t;
      const n = window.localStorage;
      const o = n.getItem("flowInfo") || null;
      if (o !== null && o !== "err") {
        t = JSON.parse(o);
        const i = new Date();
        const r = i.getTime() - t.o;
        if (r < 31 * 24 * 60 * 60 * 1e3) {
          p(t);
          return;
        }
      }
      try {
        const s = document.querySelector("meta[name='fxa']");
        const c = s && s.content;
        if (!c) {
          return;
        }
        const a = u();
        const f = await fetch(`${c}metrics-flow/?${a.toString()}`, {
          mode: "cors",
        });
        t = await f.json();
        p(t);
        n.setItem("flowInfo", JSON.stringify(t));
      } catch (e) {
        console.log(e);
        n.setItem("flowInfo", "err");
      }
    }
    function o() {
      if (t()) {
        return;
      }
      !(function (r, s) {
        var c, a, f, u;
        s.i ||
          ((window.u = s),
          (s.p = []),
          (s.init = function (t, n, o) {
            function e(t, n) {
              var o = n.split(".");
              2 == o.length && ((t = t[o[0]]), (n = o[1])),
                (t[n] = function () {
                  t.push([n].concat(Array.prototype.slice.call(arguments, 0)));
                });
            }
            ((f = r.createElement("script")).type = "text/javascript"),
              (f["async"] = !0),
              (f.src = n.l + "/static/array.js"),
              (u = r.getElementsByTagName("script")[0]).parentNode.insertBefore(
                f,
                u
              );
            var i = s;
            for (
              void 0 !== o ? (i = s[o] = []) : (o = "posthog"),
                i.g = i.g || [],
                i.toString = function (t) {
                  var n = "posthog";
                  return (
                    "posthog" !== o && (n += "." + o), t || (n += " (stub)"), n
                  );
                },
                i.g.toString = function () {
                  return i.toString(1) + ".people (stub)";
                },
                c =
                  "capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags".split(
                    " "
                  ),
                a = 0;
              a < c.length;
              a++
            )
              e(i, c[a]);
            s.p.push([t, n, o]);
          }),
          (s.i = 1));
      })(document, window.u || []);
      window.u.init("phc_XQlc4j5RDhOh3WcsllRKJO8FGluXNQOrCYWLmBmH290", {
        l: "https://app.posthog.com",
      });
    }
  }
}
