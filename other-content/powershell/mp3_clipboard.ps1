#
# Loads/converts the text clipboard content from YouTube as MP3...
#
# Please call "Set-ExecutionPolicy -Scope CurrentUser Unrestricted -Force" before once
# and download the yt-dlp and ffmpeg binaries first
# and make sure to have created a *path system environment variable* correctly before
#
Add-Type -Assembly PresentationCore
$i = 1000
while ($i -gt 0) {
    Write-Output $i
    $CLIPBOARD_TEXT = [Windows.Clipboard]::GetText()
    if ($CLIPBOARD_TEXT -match 'https://www\.youtube\.com/watch\?v=.{6,}') {
        Write-Output $CLIPBOARD_TEXT
        yt-dlp.exe -f bestaudio -x --audio-format mp3 "$CLIPBOARD_TEXT"
        Set-Clipboard -Value "This is a test string"
    }
    $i--
    Start-Sleep -Seconds 1.5
}
Pause
