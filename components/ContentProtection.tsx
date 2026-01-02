'use client'

import { useEffect } from 'react'

export default function ContentProtection() {
  useEffect(() => {
    // Disable right-click on images
    const disableRightClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'IMG') {
        e.preventDefault()
        return false
      }
    }

    // Disable text selection (optional - can be annoying for users)
    // Uncomment if you want to disable text selection
    /*
    const disableSelection = (e: Event) => {
      e.preventDefault()
      return false
    }
    */

    // Disable common keyboard shortcuts for saving/viewing source
    const disableKeyboardShortcuts = (e: KeyboardEvent) => {
      // Disable F12 (Developer Tools)
      if (e.key === 'F12') {
        e.preventDefault()
        return false
      }
      
      // Disable Ctrl+Shift+I (Developer Tools)
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault()
        return false
      }
      
      // Disable Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault()
        return false
      }
      
      // Disable Ctrl+U (View Source)
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault()
        return false
      }
      
      // Disable Ctrl+S (Save Page)
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault()
        return false
      }
    }

    // Disable drag and drop on images
    const disableDrag = (e: DragEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'IMG') {
        e.preventDefault()
        return false
      }
    }

    // Add event listeners
    document.addEventListener('contextmenu', disableRightClick)
    document.addEventListener('keydown', disableKeyboardShortcuts)
    document.addEventListener('dragstart', disableDrag)
    
    // Optional: Disable text selection
    // document.addEventListener('selectstart', disableSelection)

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', disableRightClick)
      document.removeEventListener('keydown', disableKeyboardShortcuts)
      document.removeEventListener('dragstart', disableDrag)
      // document.removeEventListener('selectstart', disableSelection)
    }
  }, [])

  return null
}

