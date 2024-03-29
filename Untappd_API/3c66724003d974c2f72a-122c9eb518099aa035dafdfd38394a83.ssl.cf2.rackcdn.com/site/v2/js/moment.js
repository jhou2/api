(function (e) {
    function M(e, t) {
        return function (n) {
            return F(e.call(this, n), t)
        }
    }

    function _(e, t) {
        return function (n) {
            return this.lang().ordinal(e.call(this, n), t)
        }
    }

    function D() {}

    function P(e) {
        B(this, e)
    }

    function H(e) {
        var t = e.years || e.year || e.y || 0,
            n = e.months || e.month || e.M || 0,
            r = e.weeks || e.week || e.w || 0,
            i = e.days || e.day || e.d || 0,
            s = e.hours || e.hour || e.h || 0,
            o = e.minutes || e.minute || e.m || 0,
            u = e.seconds || e.second || e.s || 0,
            a = e.milliseconds || e.millisecond || e.ms || 0;
        this._input = e;
        this._milliseconds = a + u * 1e3 + o * 6e4 + s * 36e5;
        this._days = i + r * 7;
        this._months = n + t * 12;
        this._data = {};
        this._bubble()
    }

    function B(e, t) {
        for (var n in t) {
            if (t.hasOwnProperty(n)) {
                e[n] = t[n]
            }
        }
        return e
    }

    function j(e) {
        if (e < 0) {
            return Math.ceil(e)
        } else {
            return Math.floor(e)
        }
    }

    function F(e, t) {
        var n = e + "";
        while (n.length < t) {
            n = "0" + n
        }
        return n
    }

    function I(e, n, r, i) {
        var s = n._milliseconds,
            o = n._days,
            u = n._months,
            a, f, l;
        if (s) {
            e._d.setTime(+e._d + s * r)
        }
        if (o || u) {
            a = e.minute();
            f = e.hour()
        }
        if (o) {
            e.date(e.date() + o * r)
        }
        if (u) {
            e.month(e.month() + u * r)
        }
        if (s && !i) {
            t.updateOffset(e)
        }
        if (o || u) {
            e.minute(a);
            e.hour(f)
        }
    }

    function q(e) {
        return Object.prototype.toString.call(e) === "[object Array]"
    }

    function R(e, t) {
        var n = Math.min(e.length, t.length),
            r = Math.abs(e.length - t.length),
            i = 0,
            s;
        for (s = 0; s < n; s++) {
            if (~~e[s] !== ~~t[s]) {
                i++
            }
        }
        return i + r
    }

    function U(e) {
        return e ? C[e] || e.toLowerCase().replace(/(.)s$/, "$1") : e
    }

    function z(e, t) {
        t.abbr = e;
        if (!s[e]) {
            s[e] = new D
        }
        s[e].set(t);
        return s[e]
    }

    function W(e) {
        if (!e) {
            return t.fn._lang
        }
        if (!s[e] && o) {
            try {
                require("./lang/" + e)
            } catch (n) {
                return t.fn._lang
            }
        }
        return s[e]
    }

    function X(e) {
        if (e.match(/\[.*\]/)) {
            return e.replace(/^\[|\]$/g, "")
        }
        return e.replace(/\\/g, "")
    }

    function V(e) {
        var t = e.match(f),
            n, r;
        for (n = 0, r = t.length; n < r; n++) {
            if (O[t[n]]) {
                t[n] = O[t[n]]
            } else {
                t[n] = X(t[n])
            }
        }
        return function (i) {
            var s = "";
            for (n = 0; n < r; n++) {
                s += t[n] instanceof Function ? t[n].call(i, e) : t[n]
            }
            return s
        }
    }

    function $(e, t) {
        function r(t) {
            return e.lang().longDateFormat(t) || t
        }
        var n = 5;
        while (n-- && l.test(t)) {
            t = t.replace(l, r)
        }
        if (!k[t]) {
            k[t] = V(t)
        }
        return k[t](e)
    }

    function J(e, t) {
        switch (e) {
        case "DDDD":
            return p;
        case "YYYY":
            return d;
        case "YYYYY":
            return v;
        case "S":
        case "SS":
        case "SSS":
        case "DDD":
            return h;
        case "MMM":
        case "MMMM":
        case "dd":
        case "ddd":
        case "dddd":
            return m;
        case "a":
        case "A":
            return W(t._l)._meridiemParse;
        case "X":
            return b;
        case "Z":
        case "ZZ":
            return g;
        case "T":
            return y;
        case "MM":
        case "DD":
        case "YY":
        case "HH":
        case "hh":
        case "mm":
        case "ss":
        case "M":
        case "D":
        case "d":
        case "H":
        case "h":
        case "m":
        case "s":
            return c;
        default:
            return new RegExp(e.replace("\\", ""))
        }
    }

    function K(e) {
        var t = (g.exec(e) || [])[0],
            n = (t + "").match(x) || ["-", 0, 0],
            r = +(n[1] * 60) + ~~n[2];
        return n[0] === "+" ? -r : r
    }

    function Q(e, t, n) {
        var r, i = n._a;
        switch (e) {
        case "M":
        case "MM":
            i[1] = t == null ? 0 : ~~t - 1;
            break;
        case "MMM":
        case "MMMM":
            r = W(n._l).monthsParse(t);
            if (r != null) {
                i[1] = r
            } else {
                n._isValid = false
            }
            break;
        case "D":
        case "DD":
        case "DDD":
        case "DDDD":
            if (t != null) {
                i[2] = ~~t
            }
            break;
        case "YY":
            i[0] = ~~t + (~~t > 68 ? 1900 : 2e3);
            break;
        case "YYYY":
        case "YYYYY":
            i[0] = ~~t;
            break;
        case "a":
        case "A":
            n._isPm = W(n._l).isPM(t);
            break;
        case "H":
        case "HH":
        case "h":
        case "hh":
            i[3] = ~~t;
            break;
        case "m":
        case "mm":
            i[4] = ~~t;
            break;
        case "s":
        case "ss":
            i[5] = ~~t;
            break;
        case "S":
        case "SS":
        case "SSS":
            i[6] = ~~ (("0." + t) * 1e3);
            break;
        case "X":
            n._d = new Date(parseFloat(t) * 1e3);
            break;
        case "Z":
        case "ZZ":
            n._useUTC = true;
            n._tzm = K(t);
            break
        }
        if (t == null) {
            n._isValid = false
        }
    }

    function G(e) {
        var t, n, r = [];
        if (e._d) {
            return
        }
        for (t = 0; t < 7; t++) {
            e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t]
        }
        r[3] += ~~((e._tzm || 0) / 60);
        r[4] += ~~((e._tzm || 0) % 60);
        n = new Date(0);
        if (e._useUTC) {
            n.setUTCFullYear(r[0], r[1], r[2]);
            n.setUTCHours(r[3], r[4], r[5], r[6])
        } else {
            n.setFullYear(r[0], r[1], r[2]);
            n.setHours(r[3], r[4], r[5], r[6])
        }
        e._d = n
    }

    function Y(e) {
        var t = e._f.match(f),
            n = e._i,
            r, i;
        e._a = [];
        for (r = 0; r < t.length; r++) {
            i = (J(t[r], e).exec(n) || [])[0];
            if (i) {
                n = n.slice(n.indexOf(i) + i.length)
            }
            if (O[t[r]]) {
                Q(t[r], i, e)
            }
        }
        if (n) {
            e._il = n
        }
        if (e._isPm && e._a[3] < 12) {
            e._a[3] += 12
        }
        if (e._isPm === false && e._a[3] === 12) {
            e._a[3] = 0
        }
        G(e)
    }

    function Z(e) {
        var t, n, r, i = 99,
            s, o;
        for (s = 0; s < e._f.length; s++) {
            t = B({}, e);
            t._f = e._f[s];
            Y(t);
            n = new P(t);
            o = R(t._a, n.toArray());
            if (n._il) {
                o += n._il.length
            }
            if (o < i) {
                i = o;
                r = n
            }
        }
        B(e, r)
    }

    function et(e) {
        var t, n = e._i,
            r = w.exec(n);
        if (r) {
            e._f = "YYYY-MM-DD" + (r[2] || " ");
            for (t = 0; t < 4; t++) {
                if (S[t][1].exec(n)) {
                    e._f += S[t][0];
                    break
                }
            }
            if (g.exec(n)) {
                e._f += " Z"
            }
            Y(e)
        } else {
            e._d = new Date(n)
        }
    }

    function tt(t) {
        var n = t._i,
            r = u.exec(n);
        if (n === e) {
            t._d = new Date
        } else {
            if (r) {
                t._d = new Date(+r[1])
            } else {
                if (typeof n === "string") {
                    et(t)
                } else {
                    if (q(n)) {
                        t._a = n.slice(0);
                        G(t)
                    } else {
                        t._d = n instanceof Date ? new Date(+n) : new Date(n)
                    }
                }
            }
        }
    }

    function nt(e, t, n, r, i) {
        return i.relativeTime(t || 1, !! n, e, r)
    }

    function rt(e, t, n) {
        var i = r(Math.abs(e) / 1e3),
            s = r(i / 60),
            o = r(s / 60),
            u = r(o / 24),
            a = r(u / 365),
            f = i < 45 && ["s", i] || s === 1 && ["m"] || s < 45 && ["mm", s] || o === 1 && ["h"] || o < 22 && ["hh", o] || u === 1 && ["d"] || u <= 25 && ["dd", u] || u <= 45 && ["M"] || u < 345 && ["MM", r(u / 30)] || a === 1 && ["y"] || ["yy", a];
        f[2] = t;
        f[3] = e > 0;
        f[4] = n;
        return nt.apply({}, f)
    }

    function it(e, n, r) {
        var i = r - n,
            s = r - e.day(),
            o;
        if (s > i) {
            s -= 7
        }
        if (s < i - 7) {
            s += 7
        }
        o = t(e).add("d", s);
        return {
            week: Math.ceil(o.dayOfYear() / 7),
            year: o.year()
        }
    }

    function st(e) {
        var n = e._i,
            r = e._f;
        if (n === null || n === "") {
            return null
        }
        if (typeof n === "string") {
            e._i = n = W().preparse(n)
        }
        if (t.isMoment(n)) {
            e = B({}, n);
            e._d = new Date(+n._d)
        } else {
            if (r) {
                if (q(r)) {
                    Z(e)
                } else {
                    Y(e)
                }
            } else {
                tt(e)
            }
        }
        return new P(e)
    }

    function ot(e, n) {
        t.fn[e] = t.fn[e + "s"] = function (e) {
            var r = this._isUTC ? "UTC" : "";
            if (e != null) {
                this._d["set" + r + n](e);
                t.updateOffset(this);
                return this
            } else {
                return this._d["get" + r + n]()
            }
        }
    }

    function ut(e) {
        t.duration.fn[e] = function () {
            return this._data[e]
        }
    }

    function at(e, n) {
        t.duration.fn["as" + e] = function () {
            return +this / n
        }
    }
    var t, n = "2.1.0",
        r = Math.round,
        i, s = {}, o = typeof module !== "undefined" && module.exports,
        u = /^\/?Date\((\-?\d+)/i,
        a = /(\-)?(\d*)?\.?(\d+)\:(\d+)\:(\d+)\.?(\d{3})?/,
        f = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,
        l = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,
        c = /\d\d?/,
        h = /\d{1,3}/,
        p = /\d{3}/,
        d = /\d{1,4}/,
        v = /[+\-]?\d{1,6}/,
        m = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
        g = /Z|[\+\-]\d\d:?\d\d/i,
        y = /T/i,
        b = /[\+\-]?\d+(\.\d{1,3})?/,
        w = /^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,
        E = "YYYY-MM-DDTHH:mm:ssZ",
        S = [
            ["HH:mm:ss.S", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/],
            ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
            ["HH:mm", /(T| )\d\d:\d\d/],
            ["HH", /(T| )\d\d/]
        ],
        x = /([\+\-]|\d\d)/gi,
        T = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"),
        N = {
            Milliseconds: 1,
            Seconds: 1e3,
            Minutes: 6e4,
            Hours: 36e5,
            Days: 864e5,
            Months: 2592e6,
            Years: 31536e6
        }, C = {
            ms: "millisecond",
            s: "second",
            m: "minute",
            h: "hour",
            d: "day",
            w: "week",
            M: "month",
            y: "year"
        }, k = {}, L = "DDD w W M D d".split(" "),
        A = "M D H h m s w W".split(" "),
        O = {
            M: function () {
                return this.month() + 1
            },
            MMM: function (e) {
                return this.lang().monthsShort(this, e)
            },
            MMMM: function (e) {
                return this.lang().months(this, e)
            },
            D: function () {
                return this.date()
            },
            DDD: function () {
                return this.dayOfYear()
            },
            d: function () {
                return this.day()
            },
            dd: function (e) {
                return this.lang().weekdaysMin(this, e)
            },
            ddd: function (e) {
                return this.lang().weekdaysShort(this, e)
            },
            dddd: function (e) {
                return this.lang().weekdays(this, e)
            },
            w: function () {
                return this.week()
            },
            W: function () {
                return this.isoWeek()
            },
            YY: function () {
                return F(this.year() % 100, 2)
            },
            YYYY: function () {
                return F(this.year(), 4)
            },
            YYYYY: function () {
                return F(this.year(), 5)
            },
            gg: function () {
                return F(this.weekYear() % 100, 2)
            },
            gggg: function () {
                return this.weekYear()
            },
            ggggg: function () {
                return F(this.weekYear(), 5)
            },
            GG: function () {
                return F(this.isoWeekYear() % 100, 2)
            },
            GGGG: function () {
                return this.isoWeekYear()
            },
            GGGGG: function () {
                return F(this.isoWeekYear(), 5)
            },
            e: function () {
                return this.weekday()
            },
            E: function () {
                return this.isoWeekday()
            },
            a: function () {
                return this.lang().meridiem(this.hours(), this.minutes(), true)
            },
            A: function () {
                return this.lang().meridiem(this.hours(), this.minutes(), false)
            },
            H: function () {
                return this.hours()
            },
            h: function () {
                return this.hours() % 12 || 12
            },
            m: function () {
                return this.minutes()
            },
            s: function () {
                return this.seconds()
            },
            S: function () {
                return~~ (this.milliseconds() / 100)
            },
            SS: function () {
                return F(~~(this.milliseconds() / 10), 2)
            },
            SSS: function () {
                return F(this.milliseconds(), 3)
            },
            Z: function () {
                var e = -this.zone(),
                    t = "+";
                if (e < 0) {
                    e = -e;
                    t = "-"
                }
                return t + F(~~(e / 60), 2) + ":" + F(~~e % 60, 2)
            },
            ZZ: function () {
                var e = -this.zone(),
                    t = "+";
                if (e < 0) {
                    e = -e;
                    t = "-"
                }
                return t + F(~~(10 * e / 6), 4)
            },
            z: function () {
                return this.zoneAbbr()
            },
            zz: function () {
                return this.zoneName()
            },
            X: function () {
                return this.unix()
            }
        };
    while (L.length) {
        i = L.pop();
        O[i + "o"] = _(O[i], i)
    }
    while (A.length) {
        i = A.pop();
        O[i + i] = M(O[i], 2)
    }
    O.DDDD = M(O.DDD, 3);
    D.prototype = {
        set: function (e) {
            var t, n;
            for (n in e) {
                t = e[n];
                if (typeof t === "function") {
                    this[n] = t
                } else {
                    this["_" + n] = t
                }
            }
        },
        _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months: function (e) {
            return this._months[e.month()]
        },
        _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort: function (e) {
            return this._monthsShort[e.month()]
        },
        monthsParse: function (e) {
            var n, r, i;
            if (!this._monthsParse) {
                this._monthsParse = []
            }
            for (n = 0; n < 12; n++) {
                if (!this._monthsParse[n]) {
                    r = t([2e3, n]);
                    i = "^" + this.months(r, "") + "|^" + this.monthsShort(r, "");
                    this._monthsParse[n] = new RegExp(i.replace(".", ""), "i")
                }
                if (this._monthsParse[n].test(e)) {
                    return n
                }
            }
        },
        _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays: function (e) {
            return this._weekdays[e.day()]
        },
        _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort: function (e) {
            return this._weekdaysShort[e.day()]
        },
        _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin: function (e) {
            return this._weekdaysMin[e.day()]
        },
        weekdaysParse: function (e) {
            var n, r, i;
            if (!this._weekdaysParse) {
                this._weekdaysParse = []
            }
            for (n = 0; n < 7; n++) {
                if (!this._weekdaysParse[n]) {
                    r = t([2e3, 1]).day(n);
                    i = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, "");
                    this._weekdaysParse[n] = new RegExp(i.replace(".", ""), "i")
                }
                if (this._weekdaysParse[n].test(e)) {
                    return n
                }
            }
        },
        _longDateFormat: {
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D YYYY",
            LLL: "MMMM D YYYY LT",
            LLLL: "dddd, MMMM D YYYY LT"
        },
        longDateFormat: function (e) {
            var t = this._longDateFormat[e];
            if (!t && this._longDateFormat[e.toUpperCase()]) {
                t = this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (e) {
                    return e.slice(1)
                });
                this._longDateFormat[e] = t
            }
            return t
        },
        isPM: function (e) {
            return (e + "").toLowerCase()[0] === "p"
        },
        _meridiemParse: /[ap]\.?m?\.?/i,
        meridiem: function (e, t, n) {
            if (e > 11) {
                return n ? "pm" : "PM"
            } else {
                return n ? "am" : "AM"
            }
        },
        _calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        calendar: function (e, t) {
            var n = this._calendar[e];
            return typeof n === "function" ? n.apply(t) : n
        },
        _relativeTime: {
            future: "a second ago",
            past: "%s ago",
            s: "seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        relativeTime: function (e, t, n, r) {
            var i = this._relativeTime[n];
            return typeof i === "function" ? i(e, t, n, r) : i.replace(/%d/i, e)
        },
        pastFuture: function (e, t) {
            var n = this._relativeTime[e > 0 ? "future" : "past"];
            return typeof n === "function" ? n(t) : n.replace(/%s/i, t)
        },
        ordinal: function (e) {
            return this._ordinal.replace("%d", e)
        },
        _ordinal: "%d",
        preparse: function (e) {
            return e
        },
        postformat: function (e) {
            return e
        },
        week: function (e) {
            return it(e, this._week.dow, this._week.doy).week
        },
        _week: {
            dow: 0,
            doy: 6
        }
    };
    t = function (e, t, n) {
        return st({
            _i: e,
            _f: t,
            _l: n,
            _isUTC: false
        })
    };
    t.utc = function (e, t, n) {
        return st({
            _useUTC: true,
            _isUTC: true,
            _l: n,
            _i: e,
            _f: t
        })
    };
    t.unix = function (e) {
        return t(e * 1e3)
    };
    t.duration = function (e, n) {
        var r = t.isDuration(e),
            i = typeof e === "number",
            s = r ? e._input : i ? {} : e,
            o = a.exec(e),
            u, f;
        if (i) {
            if (n) {
                s[n] = e
            } else {
                s.milliseconds = e
            }
        } else {
            if (o) {
                u = o[1] === "-" ? -1 : 1;
                s = {
                    y: 0,
                    d: ~~o[2] * u,
                    h: ~~o[3] * u,
                    m: ~~o[4] * u,
                    s: ~~o[5] * u,
                    ms: ~~o[6] * u
                }
            }
        }
        f = new H(s);
        if (r && e.hasOwnProperty("_lang")) {
            f._lang = e._lang
        }
        return f
    };
    t.version = n;
    t.defaultFormat = E;
    t.updateOffset = function () {};
    t.lang = function (e, n) {
        if (!e) {
            return t.fn._lang._abbr
        }
        if (n) {
            z(e, n)
        } else {
            if (!s[e]) {
                W(e)
            }
        }
        t.duration.fn._lang = t.fn._lang = W(e)
    };
    t.langData = function (e) {
        if (e && e._lang && e._lang._abbr) {
            e = e._lang._abbr
        }
        return W(e)
    };
    t.isMoment = function (e) {
        return e instanceof P
    };
    t.isDuration = function (e) {
        return e instanceof H
    };
    t.fn = P.prototype = {
        clone: function () {
            return t(this)
        },
        valueOf: function () {
            return +this._d + (this._offset || 0) * 6e4
        },
        unix: function () {
            return Math.floor(+this / 1e3)
        },
        toString: function () {
            return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        },
        toDate: function () {
            return this._offset ? new Date(+this) : this._d
        },
        toISOString: function () {
            return $(t(this).utc(), "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        },
        toArray: function () {
            var e = this;
            return [e.year(), e.month(), e.date(), e.hours(), e.minutes(), e.seconds(), e.milliseconds()]
        },
        isValid: function () {
            if (this._isValid == null) {
                if (this._a) {
                    this._isValid = !R(this._a, (this._isUTC ? t.utc(this._a) : t(this._a)).toArray())
                } else {
                    this._isValid = !isNaN(this._d.getTime())
                }
            }
            return !!this._isValid
        },
        utc: function () {
            return this.zone(0)
        },
        local: function () {
            this.zone(0);
            this._isUTC = false;
            return this
        },
        format: function (e) {
            var n = $(this, e || t.defaultFormat);
            return this.lang().postformat(n)
        },
        add: function (e, n) {
            var r;
            if (typeof e === "string") {
                r = t.duration(+n, e)
            } else {
                r = t.duration(e, n)
            }
            I(this, r, 1);
            return this
        },
        subtract: function (e, n) {
            var r;
            if (typeof e === "string") {
                r = t.duration(+n, e)
            } else {
                r = t.duration(e, n)
            }
            I(this, r, -1);
            return this
        },
        diff: function (e, n, r) {
            var i = this._isUTC ? t(e).zone(this._offset || 0) : t(e).local(),
                s = (this.zone() - i.zone()) * 6e4,
                o, u;
            n = U(n);
            if (n === "year" || n === "month") {
                o = (this.daysInMonth() + i.daysInMonth()) * 432e5;
                u = (this.year() - i.year()) * 12 + (this.month() - i.month());
                u += (this - t(this).startOf("month") - (i - t(i).startOf("month"))) / o;
                u -= (this.zone() - t(this).startOf("month").zone() - (i.zone() - t(i).startOf("month").zone())) * 6e4 / o;
                if (n === "year") {
                    u = u / 12
                }
            } else {
                o = this - i;
                u = n === "second" ? o / 1e3 : n === "minute" ? o / 6e4 : n === "hour" ? o / 36e5 : n === "day" ? (o - s) / 864e5 : n === "week" ? (o - s) / 6048e5 : o
            }
            return r ? u : j(u)
        },
        from: function (e, n) {
            return t.duration(this.diff(e)).lang(this.lang()._abbr).humanize(!n)
        },
        fromNow: function (e) {
            return this.from(t(), e)
        },
        calendar: function () {
            var e = this.diff(t().startOf("day"), "days", true),
                n = e < -6 ? "sameElse" : e < -1 ? "lastWeek" : e < 0 ? "lastDay" : e < 1 ? "sameDay" : e < 2 ? "nextDay" : e < 7 ? "nextWeek" : "sameElse";
            return this.format(this.lang().calendar(n, this))
        },
        isLeapYear: function () {
            var e = this.year();
            return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
        },
        isDST: function () {
            return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
        },
        day: function (e) {
            var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            if (e != null) {
                if (typeof e === "string") {
                    e = this.lang().weekdaysParse(e);
                    if (typeof e !== "number") {
                        return this
                    }
                }
                return this.add({
                    d: e - t
                })
            } else {
                return t
            }
        },
        month: function (e) {
            var n = this._isUTC ? "UTC" : "",
                r, i;
            if (e != null) {
                if (typeof e === "string") {
                    e = this.lang().monthsParse(e);
                    if (typeof e !== "number") {
                        return this
                    }
                }
                r = this.date();
                this.date(1);
                this._d["set" + n + "Month"](e);
                this.date(Math.min(r, this.daysInMonth()));
                t.updateOffset(this);
                return this
            } else {
                return this._d["get" + n + "Month"]()
            }
        },
        startOf: function (e) {
            e = U(e);
            switch (e) {
            case "year":
                this.month(0);
            case "month":
                this.date(1);
            case "week":
            case "day":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0)
            }
            if (e === "week") {
                this.weekday(0)
            }
            return this
        },
        endOf: function (e) {
            return this.startOf(e).add(e, 1).subtract("ms", 1)
        },
        isAfter: function (e, n) {
            n = typeof n !== "undefined" ? n : "millisecond";
            return +this.clone().startOf(n) > +t(e).startOf(n)
        },
        isBefore: function (e, n) {
            n = typeof n !== "undefined" ? n : "millisecond";
            return +this.clone().startOf(n) < +t(e).startOf(n)
        },
        isSame: function (e, n) {
            n = typeof n !== "undefined" ? n : "millisecond";
            return +this.clone().startOf(n) === +t(e).startOf(n)
        },
        min: function (e) {
            e = t.apply(null, arguments);
            return e < this ? this : e
        },
        max: function (e) {
            e = t.apply(null, arguments);
            return e > this ? this : e
        },
        zone: function (e) {
            var n = this._offset || 0;
            if (e != null) {
                if (typeof e === "string") {
                    e = K(e)
                }
                if (Math.abs(e) < 16) {
                    e = e * 60
                }
                this._offset = e;
                this._isUTC = true;
                if (n !== e) {
                    I(this, t.duration(n - e, "m"), 1, true)
                }
            } else {
                return this._isUTC ? n : this._d.getTimezoneOffset()
            }
            return this
        },
        zoneAbbr: function () {
            return this._isUTC ? "UTC" : ""
        },
        zoneName: function () {
            return this._isUTC ? "Coordinated Universal Time" : ""
        },
        daysInMonth: function () {
            return t.utc([this.year(), this.month() + 1, 0]).date()
        },
        dayOfYear: function (e) {
            var n = r((t(this).startOf("day") - t(this).startOf("year")) / 864e5) + 1;
            return e == null ? n : this.add("d", e - n)
        },
        weekYear: function (e) {
            var t = it(this, this.lang()._week.dow, this.lang()._week.doy).year;
            return e == null ? t : this.add("y", e - t)
        },
        isoWeekYear: function (e) {
            var t = it(this, 1, 4).year;
            return e == null ? t : this.add("y", e - t)
        },
        week: function (e) {
            var t = this.lang().week(this);
            return e == null ? t : this.add("d", (e - t) * 7)
        },
        isoWeek: function (e) {
            var t = it(this, 1, 4).week;
            return e == null ? t : this.add("d", (e - t) * 7)
        },
        weekday: function (e) {
            var t = (this._d.getDay() + 7 - this.lang()._week.dow) % 7;
            return e == null ? t : this.add("d", e - t)
        },
        isoWeekday: function (e) {
            return e == null ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)
        },
        lang: function (t) {
            if (t === e) {
                return this._lang
            } else {
                this._lang = W(t);
                return this
            }
        }
    };
    for (i = 0; i < T.length; i++) {
        ot(T[i].toLowerCase().replace(/s$/, ""), T[i])
    }
    ot("year", "FullYear");
    t.fn.days = t.fn.day;
    t.fn.months = t.fn.month;
    t.fn.weeks = t.fn.week;
    t.fn.isoWeeks = t.fn.isoWeek;
    t.fn.toJSON = t.fn.toISOString;
    t.duration.fn = H.prototype = {
        _bubble: function () {
            var e = this._milliseconds,
                t = this._days,
                n = this._months,
                r = this._data,
                i, s, o, u;
            r.milliseconds = e % 1e3;
            i = j(e / 1e3);
            r.seconds = i % 60;
            s = j(i / 60);
            r.minutes = s % 60;
            o = j(s / 60);
            r.hours = o % 24;
            t += j(o / 24);
            r.days = t % 30;
            n += j(t / 30);
            r.months = n % 12;
            u = j(n / 12);
            r.years = u
        },
        weeks: function () {
            return j(this.days() / 7)
        },
        valueOf: function () {
            return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + ~~(this._months / 12) * 31536e6
        },
        humanize: function (e) {
            var t = +this,
                n = rt(t, !e, this.lang());
            if (e) {
                n = this.lang().pastFuture(t, n)
            }
            return this.lang().postformat(n)
        },
        add: function (e, n) {
            var r = t.duration(e, n);
            this._milliseconds += r._milliseconds;
            this._days += r._days;
            this._months += r._months;
            this._bubble();
            return this
        },
        subtract: function (e, n) {
            var r = t.duration(e, n);
            this._milliseconds -= r._milliseconds;
            this._days -= r._days;
            this._months -= r._months;
            this._bubble();
            return this
        },
        get: function (e) {
            e = U(e);
            return this[e.toLowerCase() + "s"]()
        },
        as: function (e) {
            e = U(e);
            return this["as" + e.charAt(0).toUpperCase() + e.slice(1) + "s"]()
        },
        lang: t.fn.lang
    };
    for (i in N) {
        if (N.hasOwnProperty(i)) {
            at(i, N[i]);
            ut(i.toLowerCase())
        }
    }
    at("Weeks", 6048e5);
    t.duration.fn.asMonths = function () {
        return (+this - this.years() * 31536e6) / 2592e6 + this.years() * 12
    };
    t.lang("en", {
        ordinal: function (e) {
            var t = e % 10,
                n = ~~ (e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
            return e + n
        }
    });
    if (o) {
        module.exports = t
    }
    if (typeof ender === "undefined") {
        this["moment"] = t
    }
    if (typeof define === "function" && define.amd) {
        define("moment", [], function () {
            return t
        })
    }
}).call(this)