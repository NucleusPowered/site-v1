---
layout: modulespec
title: Documentation Centre
header: GeoIP Module
moduleid: geo-ip
modulename: Geo IP
---

## Introduction

The GeoIP module allows server admins to view the country that a player's connection originates in. **GeoIP is DISABLED by default**.

## Privacy Concerns

While a player's country is technically public information, thanks to IP address to country databases being freely available, please be considerate
 with displaying a player's country. While it might be useful for determining how to communicate with a player, please do not use it to attack another player. 
 Do not broadcast a player's country to an entire server.

## Enabling GeoIP

[Before enabling GeoIP, please read this GeoIP licences document. Enabling GeoIP constitutes acceptance of these terms.](/thirdparty/geoip.html) 

You will need to enable the GeoIP module by setting `modules.geo-ip` to `ENABLED` in `main.conf` and restarting your server. Then, set 
`geo-ip.accept-licences` to `true` and run `/nucleus reload`

## Using GeoIP

If enabled, players with the permission `nucleus.geoip.login` will see a player's country on login. Players can also be given to the `/geoip` command
to view this information at any time.

The command `/geoip update` will download the latest GeoLite2 databases from MaxMind, but there is little to no need to run this command more than once a month.
This is because the databases are only updated once a month, [please see these pages from MaxMind for more information about the databases](https://dev.maxmind.com/geoip/geoip2/geolite2/). 
The databases will be automatically downloaded for you on the first usage of the GeoIP module. 