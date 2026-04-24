local VORPcore = exports.vorp_core:GetCore()

RegisterNetEvent("scenario:checkGroup", function()
    local src = source

    local User = VORPcore.getUser(src)
    if not User then return end

    local Character = User.getUsedCharacter
    local group = Character.group or "user"

    if group == "admin" then
        TriggerClientEvent("scenario:setPermission", src, true)
    else
        TriggerClientEvent("scenario:setPermission", src, false)
    end
end)