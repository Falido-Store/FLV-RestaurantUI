local menuactive = false

function ToggleActionMenu()
	menuactive = not menuactive
	if menuactive then
		SetNuiFocus(true,true)
		TransitionToBlurred(100)
		SendNUIMessage({ showmenu = true })
	else
		SetNuiFocus(false)
		TransitionFromBlurred(100) 
		SendNUIMessage({ hidemenu = true })
	end
end

--[ BUTTON ]-----------------------------------------------------------------------------------------------------------------------------

RegisterNUICallback("ButtonClick",function(data,cb)

    -----------------      comidas           ----------------

	if data == "comprar-cheeseburger" then
		TriggerServerEvent("departamento-comprar","cheeseburger")

	elseif data == "comprar-doubledeal" then
		TriggerServerEvent("departamento-comprar","doubledeal")

	elseif data == "comprar-comboregular" then
		TriggerServerEvent("departamento-comprar","comboregular")

	elseif data == "comprar-supercombo" then
		TriggerServerEvent("departamento-comprar","supercombo")

    -----------------      BEBIDAS           ----------------
	elseif data == "comprar-agua" then
		TriggerServerEvent("departamento-comprar","agua")
		
	elseif data == "comprar-coca" then
		TriggerServerEvent("departamento-comprar","cola")

	elseif data == "comprar-pepsi" then
		TriggerServerEvent("departamento-comprar","pepsi")

	elseif data == "comprar-sprite" then
		TriggerServerEvent("departamento-comprar","sprunk")

	elseif data == "comprar-fanta" then
		TriggerServerEvent("departamento-comprar","fanta")

	
	elseif data == "fechar" then
		ToggleActionMenu()
	
	end
end)

--[ LOCAIS ]-----------------------------------------------------------------------------------------------------------------------------

local lojas = { -- Coordenadas dos locais onde o blip irá aparecer.
	{ ['x'] = 1995.16, ['y'] = 3721.64, ['z'] = 34.93 }, -- Restaurante 1 Sandy Shores
	{ ['x'] = -170.28, ['y'] = 302.42, ['z'] = 98.52 } -- Restaunte 2 City
}

--[ MENU ]-------------------------------------------------------------------------------------------------------------------------------

Citizen.CreateThread(function()
	SetNuiFocus(false,false)
	while true do
		local idle = 1000
		for k,v in pairs(lojas) do
			local ped = PlayerPedId()
			local x,y,z = table.unpack(GetEntityCoords(ped))
			local bowz,cdz = GetGroundZFor_3dCoord(v.x,v.y,v.z)
			local distance = GetDistanceBetweenCoords(v.x,v.y,cdz,x,y,z,true)
			local lojas = lojas[k]
			
			if GetDistanceBetweenCoords(GetEntityCoords(PlayerPedId()), lojas.x, lojas.y, lojas.z, true ) <= 2.1 and not menuactive then
				drawTxt("Pressione [~r~E~w~] para acessar o ~t~OHANA BURGERS~w~.",7,0.480,0.95,0.35,255,255,255,180)
			end

			if distance < 3.5 then
				DrawMarker(21, lojas.x, lojas.y, lojas.z-0.7,0,0,0,0,0,0,0.2,0.2,0.3,255, 255, 255,255,0,0,0,1)
                DrawMarker(27, lojas.x, lojas.y, lojas.z-1,0,0,0,0,0,0,0.4,0.4,0.5,255, 137, 10,255,0,0,0,1)
				idle = 5
				if distance <= 2.1 then
					if IsControlJustPressed(0,38) then
						ToggleActionMenu()
					end
				end
			end
		end
		Citizen.Wait(idle)
	end
end)

--[ FUNÇÃO ]-----------------------------------------------------------------------------------------------------------------------------

function drawTxt(text,font,x,y,scale,r,g,b,a)
	SetTextFont(font)
	SetTextScale(scale,scale)
	SetTextColour(r,g,b,a)
	SetTextOutline()
	SetTextCentre(1)
	SetTextEntry("STRING")
	AddTextComponentString(text)
	DrawText(x,y)
end