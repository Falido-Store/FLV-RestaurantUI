var _0x23a0 = ['show', 'which', '#mainmenu', '#d0d0d0', 'addEventListener', 'hidemenu', 'post', '2213cWUKZz', '277bNtxeS', 'color', 'category', '17498ZFTvkO', 'hide', '291424TRWjPx', 'data-sub', 'scale(1)', '#fff', 'data-parent', '.category_item', '350DQflnN', 'fechar', 'stringify', '.item-item', '.catSessao', '9wBsDSv', 'ButtonClick', '42562EywWoJ', 'data', '439tgGHsn', '2765547MKKBxX', 'fadeOut', '#e3c905', 'attr', '.actionmenu', 'classList', 'dropdown-btn', '.dropdown-btn', 'sub', '.menuoption', '.subtop\x20button,\x20.back', 'onkeyup', 'toggle', 'style', 'nextElementSibling', 'none', 'display', 'transform', 'background', '12130TcYQoQ', '14EIKzIM', 'click', '33BHPyTR', 'block', 'log', 'showmenu', '<i\x20class=\x27fas\x20fa-box-open\x27></i>\x20Cardápio\x20<i\x20class=\x27fas\x20fa-angle-up\x27\x20style=\x27float:\x20right;font-size:\x201vw;margin-top:\x200.7vw;\x27></i>', 'action', 'css', '.item-item[category=\x22', 'each'];

function _0x1a93(_0x1913fd, _0x40795f) { _0x1913fd = _0x1913fd - 0x12d; var _0x23a05b = _0x23a0[_0x1913fd]; return _0x23a05b; }
var _0x203d50 = _0x1a93;
(function(_0xa51847, _0xde0475) {
    var _0xf8212d = _0x1a93;
    while (!![]) {
        try {
            var _0x465eca = parseInt(_0xf8212d(0x140)) * -parseInt(_0xf8212d(0x149)) + -parseInt(_0xf8212d(0x15e)) * parseInt(_0xf8212d(0x15d)) + -parseInt(_0xf8212d(0x160)) * parseInt(_0xf8212d(0x138)) + -parseInt(_0xf8212d(0x135)) * parseInt(_0xf8212d(0x134)) + -parseInt(_0xf8212d(0x147)) * parseInt(_0xf8212d(0x145)) + -parseInt(_0xf8212d(0x13a)) + parseInt(_0xf8212d(0x14a));
            if (_0x465eca === _0xde0475) break;
            else _0xa51847['push'](_0xa51847['shift']());
        } catch (_0xf959ea) { _0xa51847['push'](_0xa51847['shift']()); }
    }
}(_0x23a0, 0x8ce88), $(function() {
    var _0x1266dc = _0x1a93;
    init();
    var _0x43b100 = $(_0x1266dc(0x14e));
    window['addEventListener']('message', function(_0x449265) {
        var _0x31da8d = _0x1266dc,
            _0x429b02 = _0x449265[_0x31da8d(0x148)];
        _0x429b02[_0x31da8d(0x163)] && (ResetMenu(), _0x43b100['fadeIn']()), _0x429b02[_0x31da8d(0x132)] && _0x43b100[_0x31da8d(0x14b)]();
    }), document[_0x1266dc(0x155)] = function(_0x41f6fc) {
        var _0x4f9b54 = _0x1266dc;
        _0x41f6fc[_0x4f9b54(0x12e)] == 0x1b && (_0x43b100['is'](':visible') && sendData(_0x4f9b54(0x146), _0x4f9b54(0x141)));
    };
}));

function ResetMenu() {
    var _0x531b37 = _0x1a93;
    $('div')[_0x531b37(0x168)](function(_0x530e6d, _0x587506) {
        var _0xd44b05 = _0x531b37,
            _0x2c424a = $(this);
        _0x2c424a[_0xd44b05(0x14d)](_0xd44b05(0x13e)) ? _0x2c424a['hide']() : _0x2c424a[_0xd44b05(0x12d)]();
    });
}

function init() {
    var _0x43f0f8 = _0x1a93;
    $(_0x43f0f8(0x153))[_0x43f0f8(0x168)](function(_0x24a4e1, _0x53a415) {
        var _0x301419 = _0x43f0f8;
        $(this)[_0x301419(0x14d)]('data-action') && $(this)['click'](function() {
            var _0x336e24 = _0x301419,
                _0x43ec53 = $(this)[_0x336e24(0x148)](_0x336e24(0x165));
            sendData(_0x336e24(0x146), _0x43ec53);
        });
        if ($(this)[_0x301419(0x14d)](_0x301419(0x13b))) {
            var _0x56dd66 = $(this)[_0x301419(0x148)](_0x301419(0x152)),
                _0x3bf853 = $('#' + _0x56dd66);
            $(this)[_0x301419(0x15f)](function() {
                var _0x234691 = _0x301419;
                _0x3bf853['show'](), $(_0x234691(0x12f))[_0x234691(0x139)]();
            }), $(_0x301419(0x154))[_0x301419(0x15f)](function() {
                var _0x37d1a0 = _0x301419;
                _0x3bf853[_0x37d1a0(0x139)](), $('#mainmenu')[_0x37d1a0(0x12d)]();
            });
        }
    });
}

function sendData(_0x13ce17, _0x5f5b14) {
    var _0x33599d = _0x1a93;
    $[_0x33599d(0x133)]('http://FLV-RestaurantUI/' + _0x13ce17, JSON[_0x33599d(0x142)](_0x5f5b14), function(_0x393ae4) {
        var _0x5de84e = _0x33599d;
        _0x393ae4 != 'ok' && console[_0x5de84e(0x162)](_0x393ae4);
    });
}
$(_0x203d50(0x13f))['click'](function() {
    var _0x297f40 = _0x203d50;
    let _0x5f2872 = $(this)['attr'](_0x297f40(0x137));
    $(_0x297f40(0x143))[_0x297f40(0x166)]('transform', 'scale(0)'), console[_0x297f40(0x162)](_0x5f2872), $('.catSessao')[_0x297f40(0x166)](_0x297f40(0x15c), 'none'), $(_0x297f40(0x144))[_0x297f40(0x166)](_0x297f40(0x136), _0x297f40(0x130)), $('#' + _0x5f2872)[_0x297f40(0x166)](_0x297f40(0x15c), _0x297f40(0x14c)), $('#' + _0x5f2872)[_0x297f40(0x166)](_0x297f40(0x136), _0x297f40(0x13d));

    function _0x3fcaeb() {
        var _0xf2291c = _0x297f40;
        $(_0xf2291c(0x143))['hide']();
    }
    setTimeout(_0x3fcaeb, 0x64);

    function _0x354509() {
        var _0x45db9b = _0x297f40;
        $(_0x45db9b(0x167) + _0x5f2872 + '\x22]')[_0x45db9b(0x12d)](), $(_0x45db9b(0x167) + _0x5f2872 + '\x22]')[_0x45db9b(0x166)](_0x45db9b(0x15b), _0x45db9b(0x13c));
    }
    setTimeout(_0x354509, 0x64);
}), $('.category_item[category=\x22all\x22]')[_0x203d50(0x15f)](function() {
    function _0x43bbfe() {
        var _0x916bc2 = _0x1a93;
        $(_0x916bc2(0x143))[_0x916bc2(0x12d)](), $(_0x916bc2(0x143))['css'](_0x916bc2(0x15b), _0x916bc2(0x13c));
    }
    setTimeout(_0x43bbfe, 0x64);
});
var dropdown = document['getElementsByClassName'](_0x203d50(0x150)),
    i;
for (i = 0x0; i < dropdown['length']; i++) {
    dropdown[i][_0x203d50(0x131)](_0x203d50(0x15f), function() {
        var _0x5ae3cd = _0x203d50;
        this[_0x5ae3cd(0x14f)][_0x5ae3cd(0x156)]('active');
        var _0x21961e = this[_0x5ae3cd(0x158)];
        _0x21961e['style'][_0x5ae3cd(0x15a)] === _0x5ae3cd(0x161) ? (_0x21961e[_0x5ae3cd(0x157)][_0x5ae3cd(0x15a)] = _0x5ae3cd(0x159), $(_0x5ae3cd(0x151))['html']('<i\x20class=\x27fas\x20fa-box-open\x27></i>\x20Cardápio\x20<i\x20class=\x27fas\x20fa-angle-down\x27\x20style=\x27float:\x20right;font-size:\x201vw;margin-top:\x200.7vw;\x27></i>')) : (_0x21961e[_0x5ae3cd(0x157)][_0x5ae3cd(0x15a)] = _0x5ae3cd(0x161), $(_0x5ae3cd(0x151))['html'](_0x5ae3cd(0x164)));
    });
}