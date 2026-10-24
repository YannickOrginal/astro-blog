---
title: 'Netzwerksegmentierung mit Multi-VLAN und DNS-Sinkhole'
description: 'Architektur eines isolierten Heimnetzwerks mit VLAN-Trunking, Gast-/IoT-Trennung und redundanter DNS-Filterung.'
pubDate: 2026-09-28
heroImage: '../../assets/blog-placeholder-2.jpg'
---

## Netzwerktrennung nach Zero-Trust-Prinzipien

Standard-Heimnetzwerke behandeln alle Clients gleichberechtigt – vom Smart-TV bis zur Workstation. Eine saubere Netzwerkarchitektur trennt diese Domänen strikt auf Layer 2 und Layer 3.

### Architekturüberblick
1. Management- & Host-Netzwerk: Primäre Arbeitsstationen und Serverinfrastruktur.
2. IoT-Netzwerk: Smarte Aktoren und Sensoren ohne direkten Zugriff auf interne Shares.
3. Gast-Netzwerk: Vollständig isolierter Internetzugang.

### DNS-Filterung & Resolver
Die Auflösung erfolgt lokal über Pi-hole / AdGuard Home mit Upstream-Anbindung an rekursive Unbound-Instanzen, um Telemetrie und Tracking deterministisch am Gateway zu blockieren.