local Tunnel = module("vrp","lib/Tunnel")
local Proxy = module("vrp","lib/Proxy")
vRP = Proxy.getInterface("vRP")

local valores = { -- Tabela de itens que serão vendidos.

	---- Comida --------------------------------------
	{ item = "comboregular", quantidade = 1, compra = 1000 },
	{ item = "supercombo", quantidade = 1, compra = 1150 },
	{ item = "cheeseburger", quantidade = 1, compra = 625 },
	{ item = "doubledeal", quantidade = 1, compra = 625 },

	--- Bebida -----------------------------------------
	{ item = "agua", quantidade = 1, compra = 300 },
	{ item = "cola", quantidade = 1, compra = 600 },
	{ item = "sprunk", quantidade = 1, compra = 600 },
	{ item = "pepsi", quantidade = 1, compra = 600 },
	{ item = "fanta", quantidade = 1, compra = 600 }
}

RegisterServerEvent("departamento-comprar")
AddEventHandler("departamento-comprar",function(item)
	local source = source
	local user_id = vRP.getUserId(source)
	if user_id then
		for k,v in pairs(valores) do
			if item == v.item then
				if vRP.getInventoryWeight(user_id)+vRP.getItemWeight(v.item)*v.quantidade <= vRP.getInventoryMaxWeight(user_id) then
					local preco = parseInt(v.compra)
					if preco then		
						if vRP.tryPayment(user_id,preco) then
							TriggerClientEvent("Notify",source,"sucesso","Comprou <b>"..parseInt(v.quantidade).."x "..v.item.."</b> por <b>$"..preco.." dólares</b>.")
							vRP.giveInventoryItem(user_id,v.item,parseInt(v.quantidade))
							TriggerClientEvent("itensNotify", source, "sucesso", ""..v.item.."", ""..v.item.."" )
						else
							TriggerClientEvent("Notify",source,"negado","Dinheiro insuficiente.")
						end
					end
				else
					TriggerClientEvent("Notify",source,"negado","Espaço insuficiente.")
				end
			end
		end
	end
end)		
	