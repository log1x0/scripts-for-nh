#
# Loads/converts the text clipboard content from YouTube as MP3...
#
# Please call "Set-ExecutionPolicy -Scope CurrentUser Unrestricted -Force" before once
# and download the yt-dlp and ffmpeg binaries first
# and make sure to have created a *path system environment variable* correctly before
#
Add-Type -Assembly PresentationCore
$CLIPBOARD_TEXT = [Windows.Clipboard]::GetText()
Write-Output $CLIPBOARD_TEXT
yt-dlp.exe -f bestaudio -x --audio-format mp3 "$CLIPBOARD_TEXT"
Pause
