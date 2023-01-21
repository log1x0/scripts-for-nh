#
# Loads/converts the clipboard text content from YouTube as MP3...
#
# Please perform the following steps **once** before:
# - Download the yt-dlp and ffmpeg binaries
# -- https://github.com/yt-dlp/yt-dlp
# -- https://github.com/yt-dlp/FFmpeg-Builds
# - Make sure to have added an entry to the *path system environment variable* correctly (to the binary folder)
# -- https://stackoverflow.com/a/46679245
# - Run "Set-ExecutionPolicy -Scope CurrentUser Unrestricted -Force" in PowerShell
#
Add-Type -Assembly PresentationCore
$i = 10000
while ($i -gt 0) {
    # Write-Output $i
    $CLIPBOARD_TEXT = [Windows.Clipboard]::GetText()
    if ($CLIPBOARD_TEXT -match 'https://www\.youtube\.com/watch\?v=([^?&]{6,})') {
        Set-Clipboard -Value "This is a test string"
        Write-Output $CLIPBOARD_TEXT
        $VIDEOID = $Matches.1
        Write-Output $VIDEOID
        yt-dlp.exe -f bestaudio -x --audio-format mp3 --audio-quality 320K -- $VIDEOID
    }
    $i--
    Start-Sleep -Seconds 3
}
Pause
