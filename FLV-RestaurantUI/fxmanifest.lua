fx_version   'adamant'
game 		 'gta5'
lua54        'yes'

--[[ Resource Information ]]--
name         'FLV-RestaurantUI'
author       'FalidoVitor#8789'
version      '2.0'
license      'MIT'
repository   'https://github.com/Falido-Store/FLV-RestaurantUI'
description  'A redesigned version of the original RestaurantUI by FalidoVitor#8789'

ui_page      'nui/darkside.html'



client_scripts {
	'@vrp/lib/utils.lua',
	'hansolo/*.lua'
}

server_scripts {
	'@vrp/lib/utils.lua',
	'ignore.lua'
}

files { 
	'nui/assets/fonts/*.ttf',
	'nui/images/*.png',
	'nui/images/Combo Regular.png',
	'nui/images/Super Combo.png',
	'nui/*.html',
	'nui/*.js',
    'nui/*.css'
}
