var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+Shop Automation Proxy", {
    "+Shop Automation Proxy": function() {
        ;
function FindProxyForURL(url, host)
{
    if (dnsDomainIs(host, "corp.telstra.com")
        || dnsDomainIs(host, "internal.bigpond.com")
		|| dnsDomainIs(host, ".apps.np.sdppcf.com")
    ) {
        return "DIRECT";
    }
	
    if (shExpMatch(url, "https://csr.onlinebilling.in.telstra.com.au*")
            || shExpMatch(url, "https://linxonlinebillview.in.telstra.com.au*")
            || shExpMatch(url, "https://uat-a.online.telstra.com*")
            || shExpMatch(url, "https://uat-a.stage.online.telstra.com*")
            || shExpMatch(url, "https://uat-b.stage.online.telstra.com*")
            || shExpMatch(url, "https://uat-c.online.telstra.com*")
            || shExpMatch(url, "https://uat-c.stage.online.telstra.com*")
            || shExpMatch(url, "https://uat-a.online.in.telstra.com.au*")
            || shExpMatch(url, "https://uat-a.stage.online.in.telstra.com.au*")
            || shExpMatch(url, "https://uat-b.online.in.telstra.com.au*")
            || shExpMatch(url, "https://uat-b.stage.online.in.telstra.com.au*")
            || shExpMatch(url, "https://uat-c.online.in.telstra.com.au*")
            || shExpMatch(url, "https://uat-c.stage.online.in.telstra.com.au*")
            || shExpMatch(url, "https://uat-a.ucm.online.in.telstra.com.au*")
            || shExpMatch(url, "https://uat-b.ucm.online.in.telstra.com.au*")
            || shExpMatch(url, "https://uat-c.ucm.online.in.telstra.com.au*")
            || shExpMatch(url, "http://uat-a.online.telstra.com*")
            || shExpMatch(url, "http://uat-a.stage.online.telstra.com*")
            || shExpMatch(url, "http://uat-b.online.telstra.com*")
            || shExpMatch(url, "http://uat-b.stage.online.telstra.com*")
            || shExpMatch(url, "http://uat-c.online.telstra.com*")
            || shExpMatch(url, "http://uat-c.stage.online.telstra.com*")
            || shExpMatch(url, "http://uat-a.online.in.telstra.com.au*")
            || shExpMatch(url, "http://uat-a.stage.online.in.telstra.com.au*")
            || shExpMatch(url, "http://uat-b.online.in.telstra.com.au*")
            || shExpMatch(url, "http://uat-b.stage.online.in.telstra.com.au*")
            || shExpMatch(url, "http://uat-c.online.in.telstra.com.au*")
            || shExpMatch(url, "http://uat-c.stage.online.in.telstra.com.au*")
            || shExpMatch(url, "http://uat-a.ucm.online.in.telstra.com.au*")
            || shExpMatch(url, "http://uat-b.ucm.online.in.telstra.com.au*")
            || shExpMatch(url, "http://uat-c.ucm.online.in.telstra.com.au*")
            || shExpMatch(url, "https://yourtelstratools.in.telstra.com.au*")
            || shExpMatch(url, "https://wa1.yourtelstratools.in.telstra.com.au*")
            || shExpMatch(url, "https://wa2.yourtelstratools.in.telstra.com.au*")
            || shExpMatch(url, "https://wa3.yourtelstratools.in.telstra.com.au*")
            || shExpMatch(url, "https://stage.yourtelstratools.in.telstra.com.au*")
            || shExpMatch(url, "https://staging.yourtelstratools.in.telstra.com.au*")
            || shExpMatch(url, "https://masq.yourtelstratools.in.telstra.com.au*")
       )
    {
        return "PROXY mws-stat-syd.cdn.telstra.com.au:88";
    }
    else if (dnsDomainIs(host, "telstra-thanksapi.telstra.com.au")
             || dnsDomainIs(host, "test-api.thanks.telstra.com")
             || dnsDomainIs(host, "thanksadmin.in.telstra.com.au")
             || dnsDomainIs(host, "www.protect.telstra.com.au")
             || dnsDomainIs(host, "api.connect.air.telstra.com.au")
             || dnsDomainIs(host, "portal.telstrawholesale.com.au")
             || dnsDomainIs(host, "twcp.in.telstra.com.au")
             || dnsDomainIs(host, "my.int.sdf.telstra.com.au")
             || dnsDomainIs(host, "my.ext.sdf.telstra.com")
			 || dnsDomainIs(host, "subscription.services.fn1.telstra.com.au")
			 || dnsDomainIs(host, "emailupdate.telstra.com")
			 || dnsDomainIs(host, "retail.cat.telstra.com.au")
			 || dnsDomainIs(host, "fn1.retail.cat.telstra.com.au")
                         || dnsDomainIs(host, "sa.thyra.telstra.com")
			 || dnsDomainIs(host, "cms.cat.telstra.com.au")
			 || dnsDomainIs(host, "fast.cms.cat.telstra.com.au")
			 || dnsDomainIs(host, "slow.cms.cat.telstra.com.au")
			 || dnsDomainIs(host, "uat.cms.cat.telstra.com.au")
			 || dnsDomainIs(host, "fn1.cat.np.in.telstra.com.au")
			 || dnsDomainIs(host, "int.cat.np.in.telstra.com.au")
			 || dnsDomainIs(host, "scithe-poc-apache.telstra.com")
            || dnsDomainIs(host, "tee.fn1.np.in.telstra.com.au")
            || dnsDomainIs(host, "ease.fn1.np.in.telstra.com.au")
            || dnsDomainIs(host, "forms-admin.fn1.np.in.telstra.com.au")
            ) {
        return "PROXY topproxy.ba.sda.corp.telstra.com:8084";
    }
    else if (dnsDomainIs(host, "fn1.tforce.np.in.telstra.com.au")
            || dnsDomainIs(host, "twsa.in.telstra.com.au")
            || dnsDomainIs(host, "shopfront4.telstra.com.au")
    )
    {
        return "PROXY topproxy.ba.sda.corp.telstra.com:8084";
    }
	// TCIF telstra.com hosts
    else if (dnsDomainIs(host, "dev-smarthome.telstra.com")
          || dnsDomainIs(host, "trl-smarthome.telstra.com")
          || dnsDomainIs(host, "cb.test.dev.telstra.com")
          || dnsDomainIs(host, "did.telstra.com")
          || dnsDomainIs(host, "infos.telstra.com")
          || dnsDomainIs(host, "info.telstra.com")
          || dnsDomainIs(host, "t-dev.telstra.com")
           ) {
            return TCIFProxy();
		}
    else if (dnsDomainIs(host, "fakesit.ridm.inside.telstra.com.au")
    )
    {
        return "PROXY lxmgt4016.dc.corp.telstra.com:3128";
    }
    else  if (dnsDomainIs(host, ".com.au"))
    {
        if (dnsDomainIs(host, ".telstra.com.au"))
        {
            if (dnsDomainIs(host, ".cdn.telstra.com.au")
                    || dnsDomainIs(host, ".corpmail.telstra.com.au")
					|| dnsDomainIs(host, "dev-checkout.telstra.com.au")
                    || dnsDomainIs(host, "uat-checkout.telstra.com.au")
                    || dnsDomainIs(host, "www.telstra.com.au")
                    || dnsDomainIs(host, ".in.telstra.com.au")
                    || dnsDomainIs(host, ".as.telstra.com.au")
                    || dnsDomainIs(host, ".app.telstra.com.au")
                    || dnsDomainIs(host, ".trl.telstra.com.au")
                    || dnsDomainIs(host, "exh.telstra.com.au")
                    || dnsDomainIs(host, "lon.telstra.com.au")
                    || dnsDomainIs(host, ".bpi.telstra.com.au")
                    || dnsDomainIs(host, ".ibmgsa.telstra.com.au")
                    || dnsDomainIs(host, ".fwall.telstra.com.au")
                    || dnsDomainIs(host, ".dev.mm.telstra.com.au")
                    || dnsDomainIs(host, ".i-pstn.telstra.com.au")
                    || dnsDomainIs(host, "mgt.vtcif.telstra.com.au")
                    || dnsDomainIs(host, "mgt.ntcif.telstra.com.au")
                    || dnsDomainIs(host, "lsr.ntcif.telstra.com.au")
                    || dnsDomainIs(host, "i.vtcif.telstra.com.au")
                    || dnsDomainIs(host, "i.ntcif.telstra.com.au")
                    || dnsDomainIs(host, "i.tcif.telstra.com.au")
                    || dnsDomainIs(host, ".epicentre.telstra.com.au")
                    || dnsDomainIs(host, ".epimodel.telstra.com.au")
                    || dnsDomainIs(host, ".opnet.telstra.com.au")
                    || dnsDomainIs(host, ".paytv.telstra.com.au")
                    || dnsDomainIs(host, ".dcnip.telstra.com.au")
                    || dnsDomainIs(host, ".dcndev.telstra.com.au")
                    || dnsDomainIs(host, ".nexus.telstra.com.au")
                    || dnsDomainIs(host, ".cmn.telstra.com.au")
               )
                return "DIRECT";
            else if (dnsDomainIs(host, ".ehmp.telstra.com.au")
                     || dnsDomainIs(host, ".voip.telstra.com.au")
                     || dnsDomainIs(host, ".brix.telstra.com.au")
                     || dnsDomainIs(host, ".vopc.telstra.com.au")
                    )
                return "PROXY ehmp-c-005.tcxf.in.telstra.com.au:8080";
            else if (dnsDomainIs(host, "4aherb.tcxf.telstra.com.au"))
                return "PROXY nni4aherb.telstra.com.au:8181";
            else if (dnsDomainIs(host, "4aherb04.tcxf.telstra.com.au"))
                return "PROXY nni4aherb04.telstra.com.au:8181";
            else if (dnsDomainIs(host, "1822da.tcxf.telstra.com.au"))
                return "PROXY vni1822da.telstra.com.au:8181";
            else if (dnsDomainIs(host, "131bar.tcxf.telstra.com.au"))
                return "PROXY qni131bar.telstra.com.au:8181";
            else if (dnsDomainIs(host, "242exh.tcxf.telstra.com.au"))
                return "PROXY vni242exh.telstra.com.au:8181";
            else if (dnsDomainIs(host, "639wel.tcxf.telstra.com.au"))
                return "PROXY wni639wel.telstra.com.au:8181";
            else if (dnsDomainIs(host, ".ims.telstra.com.au")
                     || dnsDomainIs(host, ".nettas.telstra.com.au")
                    ) {
                if (url.substring(0,8) == "https://" ) {
                    return "PROXY gsedn1.ims.tcxf.in.telstra.com.au:443";
                } else {
                    return "PROXY gsedn1.ims.tcxf.in.telstra.com.au:80";
                }
            }
            else if (dnsDomainIs(host, "clientssl.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "shopfront.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "shopfront2.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "shopfront3.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "shopfront4.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "register.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "register2.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "register3.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "onlinebill.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "onlinebilling.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "signonssl.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "onlinebilling-uat.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "linxonlinebillview.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "bigpond.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "ordering.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "stg-ordering.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "customnetcontrol.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "lolo.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "sdnr.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "sdnp.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "cnhr.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "cner.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "cnhrs.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "cners.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "gw.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "sqweb.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "sqweb-fast.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "sqweb-minisq.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "sqweb-lb.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "testdirector.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "es.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (localHostOrDomainIs(host, "ipportal.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (localHostOrDomainIs(host, "ipportal-staff.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (localHostOrDomainIs(host, "ipportal2.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (localHostOrDomainIs(host, "ipportal2-staff.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (localHostOrDomainIs(host, "ipportal.staging.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (localHostOrDomainIs(host, "ipportal-staff.staging.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "sdnreporting.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "sdnreporting.staging.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "mnc.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "lolstrial.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "lolsuat.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "partners.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "www.partners.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "uat-b.portal.wholesale.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "signon.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "onlineshop.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "wa1.www.my.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "wa2.www.my.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "wa3.www.my.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "id.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "wa1.id.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "wa2.id.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "wa3.id.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, ".vtcif.telstra.com.au"))
                return "PROXY ncai.vtcif.telstra.com.au:80; PROXY ncbi.vtcif.telstra.com.au:80";
            else if (dnsDomainIs(host, ".ntcif.telstra.com.au"))
                return "PROXY ncdi.ntcif.telstra.com.au:80; PROXY ncci.ntcif.telstra.com.au:80; PROXY ncai.ntcif.telstra.com.au:80; PROXY ncbi.ntcif.telstra.com.au:80";
            else if (dnsDomainIs(host, "vo.tcif.telstra.com.au"))
                return "PROXY bcavi.tcif.telstra.com.au:8080; PROXY bcbvi.tcif.telstra.com.au:8080; PROXY bccvi.tcif.telstra.com.au:8080; PROXY bcdvi.tcif.telstra.com.au:8080";
            else if (dnsDomainIs(host, "no.tcif.telstra.com.au"))
                return "PROXY bcani.tcif.telstra.com.au:8080; PROXY bcbni.tcif.telstra.com.au:8080; PROXY bccni.tcif.telstra.com.au:8080; PROXY bcdni.tcif.telstra.com.au:8080";
            else if (dnsDomainIs(host, ".vae.rdn.telstra.com.au"))
                return "PROXY ssproxy0003.epicentre.telstra.com.au:3128; PROXY ssproxy0004.epicentre.telstra.com.au:3128";
            else if (dnsDomainIs(host, "prm.service.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else if (dnsDomainIs(host, "service.telstra.com.au"))
                return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
            else
            {
                return TCIFProxy();
            }
        }
				
			
        if (dnsDomainIs(host, ".tansu.com.au")
                || dnsDomainIs(host, ".telecom.com.au")
                || dnsDomainIs(host, ".otc.com.au")
           )
            return "DIRECT";

        if (dnsDomainIs(host, ".sensis.com.au")) {
            if (dnsDomainIs(host, "www.sensis.com.au")
                    || dnsDomainIs(host, "online.sensis.com.au")
                    || dnsDomainIs(host, "m2006.sensis.com.au")
                    || dnsDomainIs(host, ".about.sensis.com.au")
                    || dnsDomainIs(host, "media.sensis.com.au")
                    || dnsDomainIs(host, "medrx.sensis.com.au")
                    || dnsDomainIs(host, "nav.sensis.com.au")
                    || dnsDomainIs(host, "smallbusiness.sensis.com.au")
               ) {
                return TCIFProxy();
            } else {
                return "PROXY intranet.pacificaccess.tcxf.in.telstra.com.au:8080";
            }
        }
        if (dnsDomainIs(host, ".pacificaccess.com.au")) {
            if (dnsDomainIs(host, "www.pacificaccess.com.au")
                    || dnsDomainIs(host, "www.corporate.pacificaccess.com.au")
               ) {
                return TCIFProxy();
            } else {
                return "PROXY intranet.pacificaccess.tcxf.in.telstra.com.au:8080";
            }
        }

        if (dnsDomainIs(host, "enterpriseservices.com.au"))
            return "PROXY tssyd0203px01p.tes.tcxf.in.telstra.com.au:80";

        if (dnsDomainIs(host, "payrollplus.com.au"))
            return "DIRECT";

        if (dnsDomainIs(host, "mmic.alcatel.com.au"))
            return "DIRECT";

        if (dnsDomainIs(host, "autodiscover.ndc.com.au"))
            return "DIRECT";
    }

    if (dnsDomainIs(host, "afl.com.au")
            || dnsDomainIs(host, "afl.com.au")
            || dnsDomainIs(host, "livescores.afl.com.au")
       )
        return "PROXY mws-stat-syd.cdn.telstra.com.au:81";

    if (dnsDomainIs(host, "boost.com.au")
            || dnsDomainIs(host, "activate.boost.com.au")
            || dnsDomainIs(host, "recharge.boost.com.au")
       )
        return "PROXY mws-stat-syd.cdn.telstra.com.au:85";

    if (dnsDomainIs(host, "www.telstradealernet.com"))
        return "PROXY mws-stat-syd.cdn.telstra.com.au:85";

    if (dnsDomainIs(host, "www.retaillive.com.au"))
        return "PROXY mws-stat-syd.cdn.telstra.com.au:81";

    if (dnsDomainIs(host, "uat-b.online.telstra.com"))
        return "PROXY mws-stat-syd.cdn.telstra.com.au:88";

    if (dnsDomainIs(host, "ut-b.portal.telstrawholesale.com.au"))
        return "PROXY mws-stat-syd.cdn.telstra.com.au:82";

    if (dnsDomainIs(host, "telstrawholesale.com.au")
            || dnsDomainIs(host, "maps.telstrawholesale.com.au")
            || dnsDomainIs(host, "dc.telstrawholesale.com.au")
            || dnsDomainIs(host, "secure.telstrawholesale.com.au")
            || dnsDomainIs(host, "foh.telstrawholesale.com.au")
            || dnsDomainIs(host, "www.lola.telstrawholesale.com.au")
            || dnsDomainIs(host, "uat-a.portal.telstrawholesale.com.au")
            || dnsDomainIs(host, "uat-c.portal.telstrawholesale.com.au")
            || dnsDomainIs(host, "portal.telstrawholesale.com.au")
            || dnsDomainIs(host, "uat-a.staging.portal.telstrawholesale.com.au")
            || dnsDomainIs(host, "uat-c.staging.portal.telstrawholesale.com.au")
            || dnsDomainIs(host, "staging.portal.telstrawholesale.com.au")
       )
        return "PROXY mws-stat-syd.cdn.telstra.com.au:85";

    if (dnsDomainIs(host, "www.fetchmemovies.com.au"))
        return "PROXY mws-stat-syd.cdn.telstra.com.au:85";

    if (dnsDomainIs(host, "fetchmemovies.com.au"))
        return "PROXY mws-stat-syd.cdn.telstra.com.au:85";

    if (dnsDomainIs(host, "www.admin.fetchmemovies.com.au"))
        return "PROXY mws-stat-syd.cdn.telstra.com.au:85";

    if (dnsDomainIs(host, "admin.fetchmemovies.com.au"))
        return "PROXY mws-stat-syd.cdn.telstra.com.au:85";

    if (dnsDomainIs(host, "bigpondmovies.com")
            || dnsDomainIs(host, "bigpondmovies.com")
            || dnsDomainIs(host, "www.bigpondmovies.com")
            || dnsDomainIs(host, "secure.bigpondmovies.com")
            || dnsDomainIs(host, "www.admin.bigpondmovies.com")
            || dnsDomainIs(host, "admin.bigpondmovies.com")
            || dnsDomainIs(host, "dowloads.bigpondmovies.com")
            || dnsDomainIs(host, "fc.bigpondmovies.com")
            || dnsDomainIs(host, "www.fc.bigpondmovies.com")
       )
        return "PROXY mws-stat-syd.cdn.telstra.com.au:85";

    if (shExpMatch(host, "*foh.telstra.com"))
        return "PROXY mws-stat-syd.cdn.telstra.com.au:85";

    if (dnsDomainIs(host, "foh.staging.telstra.com"))
        return "PROXY mws-stat-syd.cdn.telstra.com.au:85";

    if (dnsDomainIs(host, "es.telstra.com"))
        return "PROXY mws-stat-syd.cdn.telstra.com.au:85";

    if (dnsDomainIs(host, "telstraenterprise.com")
            || dnsDomainIs(host, "www2.telstraenterprise.com")
       )
        return "PROXY mws-stat-syd.cdn.telstra.com.au:85";

    if (dnsDomainIs(host, "clients.eclipsegroup.com.au"))
        return "PROXY mws-stat-syd.cdn.telstra.com.au:85";

    if (dnsDomainIs(host, "telstra-online.com")
            || dnsDomainIs(host, "telstra-online.com")
            || dnsDomainIs(host, "www.telstra-online.com")
       )
        return "PROXY mws-stat-syd.cdn.telstra.com.au:85";

    if (dnsDomainIs(host, "bigpondmusic.com")
            || dnsDomainIs(host, "bigpondmusic.com")
            || dnsDomainIs(host, "www.bigpondmusic.com")
       )
        return "PROXY mws-stat-syd.cdn.telstra.com.au:85";

    if (dnsDomainIs(host, "t-static.com")
            || dnsDomainIs(host, "vas.t-static.com")
            || dnsDomainIs(host, "account.t-static.com")
            || dnsDomainIs(host, "ytt.t-static.com")
            || dnsDomainIs(host, "wa1.ytt.t-static.com")
            || dnsDomainIs(host, "wa2.ytt.t-static.com")
            || dnsDomainIs(host, "wa3.ytt.t-static.com")
       )
        return "PROXY mws-stat-syd.cdn.telstra.com.au:85";

    if (dnsDomainIs(host, "v8supercar.com.au")
            || dnsDomainIs(host, "v8supercar.com.au")
            || dnsDomainIs(host, "staging.v8supercar.com.au")
            || dnsDomainIs(host, "publish.v8supercar.com.au")
       )
        return "PROXY mws-stat-syd.cdn.telstra.com.au:85";

    if (dnsDomainIs(host, "telstrashop.telstra.com")
            || dnsDomainIs(host, "search.telstra.com")
       )
        return "PROXY ncai.vtcif.telstra.com.au:80";

    if (dnsDomainIs(host, "bigpondphotos.com.au")
            || dnsDomainIs(host, "bigpondphotos.com.au")
            || dnsDomainIs(host, "www.bigpondphotos.com.au")
       )
        return "PROXY mws-stat-syd.cdn.telstra.com.au:87";

    if (dnsDomainIs(host, "bigblog.com.au")
            || dnsDomainIs(host, "www.bigblog.com.au")
       )
        return "PROXY mws-stat-syd.cdn.telstra.com.au:87";

    if (dnsDomainIs(host, "mobileaccess.bigpond.com")
            || dnsDomainIs(host, "www.mobileaccess.bigpond.com")
       )
        return "PROXY mws-stat-syd.cdn.telstra.com.au:87";

    if (dnsDomainIs(host, "messaging.bigpond.com")
            || dnsDomainIs(host, "www.messaging.bigpond.com")
       )
        return "PROXY mws-stat-syd.cdn.telstra.com.au:87";

    if (dnsDomainIs(host, "uat-a.online.telstra.com"))
        return "PROXY mws-stat-syd.cdn.telstra.com.au:88";

    if (dnsDomainIs(host, "deviceid.remoteworking.telstra.com"))
        return TCIFProxy();

    if (dnsDomainIs(host, "survey.122.2o7.net"))
        return TCIFProxy();

    if (dnsDomainIs(host, "yourcdn.telstra.com"))
        return "PROXY mws-stat-syd.cdn.telstra.com.au:85";

    if (dnsDomainIs(host, "myid-nonprod.telstra.com"))
                return TCIFProxy();

    if (dnsDomainIs(host, "telstra.com"))
    {
        if (dnsDomainIs(host, ".dir.telstra.com")
                || dnsDomainIs(host, "deviceid.remoteworking.telstra.com")
           )
            return "DIRECT";

        if (dnsDomainIs(host, "jira.ae.sda.corp.telstra.com")
           )
            return "DIRECT";

        if (dnsDomainIs(host, "author.fast.tcom.corp.telstra.com")
           )
            return "DIRECT";

        if (dnsDomainIs(host, "identitybuildbox.wg.dir.telstra.com")
           )
            return "DIRECT";


        if (dnsDomainIs(host, "www.telstra.com")
           )
            return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
        if (dnsDomainIs(host, "telstra.com")
                || dnsDomainIs(host, "shop.telstra.com")
                || dnsDomainIs(host, "shop.staging.telstra.com")
                || dnsDomainIs(host, "shopfoh.telstra.com")
                || dnsDomainIs(host, "shopfoh.staging.telstra.com")
                || dnsDomainIs(host, "web02.telstra.com")
                || dnsDomainIs(host, "foh.ecsmc.telstra.com")
                || dnsDomainIs(host, "web03.telstra.com")
                || dnsDomainIs(host, "web03.staging.telstra.com")
                || dnsDomainIs(host, "web02foh.telstra.com")
                || dnsDomainIs(host, "web02foh.staging.telstra.com")
                || dnsDomainIs(host, "web03foh.telstra.com")
                || dnsDomainIs(host, "web03foh.staging.telstra.com")
                || dnsDomainIs(host, "austarfoh.telstra.com")
                || dnsDomainIs(host, "ssoinit.telstra.com")
                || dnsDomainIs(host, "austarfoh.staging.telstra.com")
                || dnsDomainIs(host, "ctones.telstra.com")
                || dnsDomainIs(host, "ctonesfoh.telstra.com")
                || dnsDomainIs(host, "talknow.telstra.com")
                || dnsDomainIs(host, "talknowfoh.telstra.com")
                || dnsDomainIs(host, "svt.ipss.telstra.com")
                || dnsDomainIs(host, "svt.stage.ipss.telstra.com")
                || dnsDomainIs(host, "uat-a.yourtelstratools.telstra.com")
                || dnsDomainIs(host, "uat-a.stage.yourtelstratools.telstra.com")
                || dnsDomainIs(host, "uat-b.yourtelstratools.telstra.com")
                || dnsDomainIs(host, "uat-b.stage.yourtelstratools.telstra.com")
                || dnsDomainIs(host, "uat-c.yourtelstratools.telstra.com")
                || dnsDomainIs(host, "uat-c.stage.yourtelstratools.telstra.com")
                || dnsDomainIs(host, "collab.uat-a.yourtelstratools.telstra.com")
                || dnsDomainIs(host, "collab.uat-b.yourtelstratools.telstra.com")
                || dnsDomainIs(host, "collab.uat-c.yourtelstratools.telstra.com")
                || dnsDomainIs(host, "uat-a.ipss.telstra.com")
                || dnsDomainIs(host, "uat-a.stage.ipss.telstra.com")
                || dnsDomainIs(host, "uat-b.ipss.telstra.com")
                || dnsDomainIs(host, "uat-b.stage.ipss.telstra.com")
                || dnsDomainIs(host, "uat-c.ipss.telstra.com")
                || dnsDomainIs(host, "uat-c.stage.ipss.telstra.com")
                || dnsDomainIs(host, "myacct.telstra.com")
                || dnsDomainIs(host, "www.developer.telstra.com")
                || dnsDomainIs(host, "developer.telstra.com")
                || dnsDomainIs(host, "signon.telstra.com")
                || dnsDomainIs(host, "signon.sdf.telstra.com")
                || dnsDomainIs(host, "signon.ext.sdf.telstra.com")
                || dnsDomainIs(host, "signon.int.sdf.telstra.com")
                || dnsDomainIs(host, "fn1.signon.telstra.com")
                || dnsDomainIs(host, "npmantegtest.telstra.com")
                || dnsDomainIs(host, "npmantbtest.telstra.com")
                || dnsDomainIs(host, "npmantwtest.telstra.com")
                || dnsDomainIs(host, "prepaidrecharge.telstra.com")
                || dnsDomainIs(host, "www.prepaidrecharge.telstra.com")
                || dnsDomainIs(host, "internal.cloud.telstra.com")
                || dnsDomainIs(host, "dealer.cloud.telstra.com")
                || dnsDomainIs(host, "cloud.telstra.com")
                || dnsDomainIs(host, "uatb.nbndaportal.telstra.com")
                || dnsDomainIs(host, "smartcontrols.telstra.com")
                || dnsDomainIs(host, "uat-c.nbndaportal.telstra.com")
                || dnsDomainIs(host, "mpmweb.devmobile.telstra.com")
                || dnsDomainIs(host, "identitymanagement.ext.sdf.telstra.com")
                || dnsDomainIs(host, "yourtelstratools.telstra.com")
                || dnsDomainIs(host, "wa1.yourtelstratools.telstra.com")
                || dnsDomainIs(host, "wa2.yourtelstratools.telstra.com")
                || dnsDomainIs(host, "wa3.yourtelstratools.telstra.com")
                || dnsDomainIs(host, "stage.yourtelstratools.telstra.com")
                || dnsDomainIs(host, "staging.yourtelstratools.telstra.com")
                || dnsDomainIs(host, "livechat.telstra.com")
                || dnsDomainIs(host, "osm.int.sdf.telstra.com")
                || dnsDomainIs(host, "osm.ext.sdf.telstra.com")

           )
            return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
    }

    if (dnsDomainIs(host, "bigpond.com")
            || dnsDomainIs(host, "www.bigpond.com")
       )
        return "PROXY mws-stat-syd.cdn.telstra.com.au:85";


    else if (dnsDomainIs(host, ".bigpond.com"))
    {
        if (dnsDomainIs(host, ".bigpond.com")
                || dnsDomainIs(host, "bigpond.com")
                || dnsDomainIs(host, "www.bigpond.com")
                || dnsDomainIs(host, "business.bigpond.com")
                || dnsDomainIs(host, "signup.bigpond.com")
                || dnsDomainIs(host, "newsdesk.bigpond.com")
                || dnsDomainIs(host, "account.bigpond.com")
                || dnsDomainIs(host, "in.account.bigpond.com")
                || dnsDomainIs(host, "publish.v8supercar.bigpond.com")
                || dnsDomainIs(host, "stagingpublish.v8supercar.bigpond.com")
                || dnsDomainIs(host, "staging.v8supercar.bigpond.com")
                || dnsDomainIs(host, "www.v8supercar.bigpond.com")
                || dnsDomainIs(host, "register.bigpond.com")
                || dnsDomainIs(host, "my.bigpond.com")
                || dnsDomainIs(host, "moby.bigpond.com")
                || dnsDomainIs(host, "music.bigpond.com")
                || dnsDomainIs(host, "video.nrl.bigpond.com")
                || dnsDomainIs(host, "staging.video.nrl.bigpond.com")
                || dnsDomainIs(host, "rmp.bigpond.com")
                || dnsDomainIs(host, "admin.rmp.bigpond.com")
                || dnsDomainIs(host, "message.bigpond.com")
                || dnsDomainIs(host, "webmail.bigpond.com")
                || dnsDomainIs(host, "webedge.bigpond.com")
                || dnsDomainIs(host, "webedge2.bigpond.com")
                || dnsDomainIs(host, "www.v8supercars.bigpond.com")
                || dnsDomainIs(host, "www.v8supercar.bigpond.com")
                || dnsDomainIs(host, "v8supercar.bigpond.com")
                || dnsDomainIs(host, "basic.messaging.bigpond.com")
                || dnsDomainIs(host, "messaging.bigpond.com")
                || dnsDomainIs(host, "signon.bigpond.com")
                || dnsDomainIs(host, "myacct.bigpond.com")
                || dnsDomainIs(host, "signon.bigpond.com")
                || dnsDomainIs(host, "fn1.signon.bigpond.com")
           )
            return "PROXY mws-stat-syd.cdn.telstra.com.au:85";
    }

    if (dnsDomainIs(host, ".telstraclear.co.nz")) {
        if (dnsDomainIs(host, "wlgra.telstraclear.co.nz")
                || dnsDomainIs(host, "staffmail.telstraclear.co.nz")
                || dnsDomainIs(host, "www.telstraclear.co.nz")
                || dnsDomainIs(host, "www2.telstraclear.co.nz")
                || dnsDomainIs(host, "networkstatus.telstraclear.co.nz")
                || dnsDomainIs(host, "aklra.telstraclear.co.nz")
           ) {
            return TCIFProxy();
        } else {
            return "DIRECT";
        }
    }

    if (dnsDomainIs(host, ".clear.co.nz")) {
        return "DIRECT";
    }

    if (shExpMatch(host, "137.147.*")
            || shExpMatch(host, "144.140.32.4")
            || shExpMatch(host, "172.26.62.*")
            || shExpMatch(host, "127.0.0.*")
            || shExpMatch(host, "169.254.239.*")
            || shExpMatch(host, "202.12.142.*")
            || shExpMatch(host, "202.12.162.*")
            || shExpMatch(host, "10.0.0.*")
            || shExpMatch(host, "192.168.*.*")
       )
        return "DIRECT";

    if (dnsDomainIs(host, ".in.telstra.net"))
        return "DIRECT";

    if (dnsDomainIs(host, ".nettas.net")) {
        if (url.substring(0,8) == "https://" ) {
            return "PROXY gsedn1.ims.tcxf.in.telstra.com.au:443";
        } else {
            return "PROXY gsedn1.ims.tcxf.in.telstra.com.au:80";
        }
    }

    if (dnsDomainIs(host, "telstra.biz"))
        return "DIRECT";

    if (dnsDomainIs(host, "kaz-group.priv"))
        return "DIRECT";

    if (dnsDomainIs(host, "enterpriseservices.net.au"))
        return "PROXY tssyd0203px01p.tes.tcxf.in.telstra.com.au:80";

    if (dnsDomainIs(host, ".com"))
    {
        if (dnsDomainIs(host, ".telstra.com"))
        {
            if (dnsDomainIs(host, ".dir.telstra.com")
                    || dnsDomainIs(host, ".corp.telstra.com")
                    || dnsDomainIs(host, ".imn.telstra.com")
                    || dnsDomainIs(host, ".nipt.telstra.com")
                    || dnsDomainIs(host, ".salesdemo.cnmm.telstra.com")
                    || dnsDomainIs(host, "autodiscover.team.telstra.com")
                    || dnsDomainIs(host, "autodiscover.countrywide.telstra.com")
               )
                return "DIRECT";

            return TCIFProxy();
        }

        if (dnsDomainIs(host, "bpcms.my.bigpond.com"))
            return "DIRECT";

        if (dnsDomainIs(host, "pandora.teletechintl.com"))
            return "DIRECT";

        if (dnsDomainIs(host, "laxnotes4.infonet.com"))
            return "DIRECT";

        if (dnsDomainIs(host, "laxapp2.infonet.com"))
            return "DIRECT";

        if (dnsDomainIs(host, "laxapp.infonet.com"))
            return "DIRECT";

        if (dnsDomainIs(host, "my.infonet.com"))
            return "DIRECT";

        if (dnsDomainIs(host, "documentum.infonet.com"))
            return "DIRECT";

        if (dnsDomainIs(host, "autodiscover.ndcglobal.com"))
            return "DIRECT";

        if (dnsDomainIs(host, ".cabcconnection.com")
                || dnsDomainIs(host, "utils.winantivirus.com")
                || dnsDomainIs(host, "utils.winfixer.com")
           )
            return "PROXY 127.0.0.1:80";
    }

    return TCIFProxy();
}

function IPhash()
{
    var thisIPaddr = myIpAddress();
    var lastDot = ".";
    var i = thisIPaddr.lastIndexOf(lastDot);
    i++;
    var ln = thisIPaddr.length;
    ln++;
    var lastoct = parseFloat(thisIPaddr.substring(i,ln));
    return lastoct;
}

function TCIFProxy()
{
    var hash = IPhash() % 4;

    if (hash < 1) {
        return "PROXY bcavi.tcif.telstra.com.au:8080; PROXY bcbvi.tcif.telstra.com.au:8080; PROXY bcani.tcif.telstra.com.au:8080; PROXY bcbni.tcif.telstra.com.au:8080";
    } else if (hash < 2) {
        return "PROXY bcbvi.tcif.telstra.com.au:8080; PROXY bcavi.tcif.telstra.com.au:8080; PROXY bcbni.tcif.telstra.com.au:8080; PROXY bcani.tcif.telstra.com.au:8080";
    } else if (hash < 3) {
        return "PROXY bcani.tcif.telstra.com.au:8080; PROXY bcbni.tcif.telstra.com.au:8080; PROXY bcavi.tcif.telstra.com.au:8080; PROXY bcbvi.tcif.telstra.com.au:8080";
    } else {
        return "PROXY bcbni.tcif.telstra.com.au:8080; PROXY bcani.tcif.telstra.com.au:8080; PROXY bcbvi.tcif.telstra.com.au:8080; PROXY bcavi.tcif.telstra.com.au:8080";
    }
}


/* End of PAC */;
        return FindProxyForURL;
    }.call(this)
});