import React from 'react'

interface QuickFactsEntryProps {
    title: string,
    content: string
}

const QuickFactsEntry = ({ title, content }: QuickFactsEntryProps) => {
  return (
    <div className="flex flex-col gap-2"> 
        <h5 className="text-xl font-spacegrotesk text-offwhite">
            {title}:
        </h5>
        <p className="text-md font-inter text-offwhite">
            {content}
        </p>
    </div>
  )
}

export default QuickFactsEntry