# Change to the root directory and to the specified subdirectories until downloadable content is found.
# Then download the content to the specified directory.
$OutDir=".\"
$SiteAdress = "https://.../downloads/"
$cred = Get-Credential
function get_links_1($SiteAdress) {
    $HttpContent = Invoke-WebRequest -UseBasicParsing -URI $SiteAdress -Credential $cred
    return $HttpContent.Links | Select -ExpandProperty href
}
function download_1($SiteAdress, $OutFile) {
    $ProgressPreference = 'SilentlyContinue'
    Invoke-WebRequest -UseBasicParsing -URI $SiteAdress -Credential $cred -OutFile $OutFile
}
$links1 = get_links_1 $SiteAdress
$links2 = $links1 -match "^.+\.(mkv|rar|r\d+)$"
do {
    for ($num = 0 ; $num -lt $links1.Count ; $num++) {
        Write-Host $num $links1[$num]
    }
    $num2 = Read-Host -Prompt 'Nummmer? '
    $SiteAdress += $links1[$num2]
    $links1 = get_links_1 $SiteAdress
    $links2 = $links1 -match "^.+\.(mkv|rar|r\d+)$"
} while ($links2.Count -le 0)
for ($num = 0 ; $num -lt $links2.Count ; $num++) {
    Write-Host $num $SiteAdress $links2[$num]
    $sa = "{0}{1}" -f $SiteAdress, $links2[$num]
    $of = "{0}{1}" -f $OutDir, $links2[$num]
    download_1 $sa $of
}
pause
