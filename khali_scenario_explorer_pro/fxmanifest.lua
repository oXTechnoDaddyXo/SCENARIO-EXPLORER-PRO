--[[
    ╔═══════════════════════════════════════════════════════════════════╗
    ║                                                                   ║
    ║                S C E N A R I O   P R E W I E W                    ║
    ║           ────────────────────────────────────────                ║
    ║                  VORP Scenario Preview System                     ║
    ║                        Redemption Script                          ║
    ║                                                                   ║
    ║                                                                   ║
    ║                                                                   ║
    ╠═══════════════════════════════════════════════════════════════════╣
    ║   Server:    oXTechnoKhaliXo Scripts                              ║
    ║   Creator:   oXTechnoKhaliXo                                      ║
    ║   Discord:   https://discord.gg/8NjehNeEuZ                        ║
    ╠═══════════════════════════════════════════════════════════════════╣
    ║   © 2026 oXTechnoKhaliXo | All Rights Reserved                    ║
    ╚═══════════════════════════════════════════════════════════════════╝
]]
fx_version 'cerulean'
game 'rdr3'

name 'khali_scenario_preview'
author 'oXTechnoKhaliXo'
description 'Scenario Explorer DEV MODE (VORP)'
rdr3_warning 'I acknowledge that this is a prerelease build of RedM, and I am aware my resources *will* become incompatible once RedM ships.'
version '1.0.0'

ui_page 'html/index.html'

files {
    'html/index.html',
    'html/style.css',
    'html/script.js'
}

client_scripts {
	'client/*.lua'
}

server_scripts {
	'server/*.lua'
}

dependencies {
    'vorp_core'
}