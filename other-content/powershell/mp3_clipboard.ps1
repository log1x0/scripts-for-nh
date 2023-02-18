#
# Loads/converts the text clipboard content from YouTube as MP3...
#
# Please do the following steps before once:
# - Download the yt-dlp and ffmpeg binaries
# - Make sure to have added an entry to the *path system environment variable* correctly (to the binary folder)
# - Call "Set-ExecutionPolicy -Scope CurrentUser Unrestricted -Force"
#
Add-Type -Assembly PresentationCore
$i = 1000
while ($i -gt 0) {
    Write-Output $i
    $CLIPBOARD_TEXT = [Windows.Clipboard]::GetText()
    if ($CLIPBOARD_TEXT -match 'https://www\.youtube\.com/watch\?v=([^?&]{6,})') {
        Set-Clipboard -Value "This is a test string"
        Write-Output $CLIPBOARD_TEXT
        $VIDEOID = $Matches.1
        Write-Output $VIDEOID
        yt-dlp.exe -f bestaudio -x --audio-format mp3 "$VIDEOID"
        
    }
    $i--
    Start-Sleep -Seconds 1.5
}
Pause
