export const messagesMetadata = {
  id: 'messages',
  name: 'Messages',
  description: 'A complete chat interface for displaying conversations between users. It includes message bubbles, avatars, timestamps, file attachments, and an input form for sending new messages.',
  category: 'Communication',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/Messages',
  dependencies: ['react'],
  tags: ['messages', 'chat', 'conversation', 'messaging', 'communication', 'ui'],
  relatedComponents: ['Avatar', 'Input', 'Button', 'Card'],
  features: [
    'Message bubbles with different styles for self/other',
    'Avatar support for both users',
    'Timestamp display',
    'File attachment support',
    'Image message support',
    'Input form for sending messages',
    'Scrollable message history',
    'Customizable width and height',
    'Disabled state support',
    'Full accessibility support with ARIA attributes'
  ],
  props: [
    {
      name: 'messages',
      type: 'MessageItem[]',
      description: 'Array of message items to display (Required)',
      required: true
    },
    {
      name: 'otherAvatar',
      type: 'string',
      description: 'Avatar image URL for the other person',
      required: false
    },
    {
      name: 'selfAvatar',
      type: 'string',
      description: 'Avatar image URL for the current user',
      required: false
    },
    {
      name: 'otherName',
      type: 'string',
      description: 'Name of the other person',
      required: false
    },
    {
      name: 'width',
      type: 'string',
      description: 'Custom width for the messages container',
      required: false,
      defaultValue: "'100%'"
    },
    {
      name: 'onSendMessage',
      type: '(text: string) => void',
      description: 'Callback when a new message is sent',
      required: false
    },
    {
      name: 'placeholder',
      type: 'string',
      description: 'Placeholder text for the input field',
      required: false,
      defaultValue: "'Type a message'"
    },
    {
      name: 'bodyHeight',
      type: 'string',
      description: 'Maximum height for the messages body',
      required: false
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'Disable message input and interactions',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'id',
      type: 'string',
      description: 'Unique identifier for the messages component',
      required: false
    },
    {
      name: 'className',
      type: 'string',
      description: 'Additional CSS classes',
      required: false,
      defaultValue: "''"
    }
  ],
  examples: [
    {
      title: 'Basic Chat Interface',
      description: 'Simple chat interface with messages',
      code: `import { useState } from 'react';
import { Messages } from '@shohojdhara/atomix';

function ChatInterface() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! How can I help you today?",
      time: "10:30 AM",
      isSelf: false
    },
    {
      id: 2,
      text: "I have a question about your services.",
      time: "10:32 AM",
      isSelf: true
    },
    {
      id: 3,
      text: "Of course! I'd be happy to help.",
      time: "10:33 AM",
      isSelf: false
    }
  ]);

  const handleSendMessage = (text) => {
    const newMessage = {
      id: Date.now(),
      text,
      time: new Date().toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit' 
      }),
      isSelf: true
    };
    
    setMessages(prev => [...prev, newMessage]);
  };

  return (
    <Messages
      messages={messages}
      otherAvatar="https://example.com/support-avatar.jpg"
      selfAvatar="https://example.com/user-avatar.jpg"
      otherName="Support Agent"
      onSendMessage={handleSendMessage}
      placeholder="Type your message..."
    />
  );
}`,
      preview: true
    },
    {
      title: 'Messages with Images',
      description: 'Chat interface with image messages',
      code: `function MessagesWithImages() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Check out this image!",
      time: "10:30 AM",
      isSelf: true,
      image: "https://example.com/image.jpg"
    },
    {
      id: 2,
      text: "That looks great!",
      time: "10:31 AM",
      isSelf: false
    }
  ]);

  return (
    <Messages
      messages={messages}
      otherAvatar="/avatars/friend.jpg"
      selfAvatar="/avatars/me.jpg"
      onSendMessage={(text) => {
        // Handle message sending
      }}
    />
  );
}`,
      preview: true
    },
    {
      title: 'Messages with File Attachments',
      description: 'Chat interface with file attachments',
      code: `function MessagesWithFiles() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Here's the document you requested",
      time: "10:30 AM",
      isSelf: false,
      file: {
        name: "document.pdf",
        size: "2.5 MB"
      }
    }
  ]);

  return (
    <Messages
      messages={messages}
      otherAvatar="/avatars/sender.jpg"
      onSendMessage={(text) => {
        // Handle message sending
      }}
    />
  );
}`,
      preview: true
    },
    {
      title: 'Custom Sized Messages',
      description: 'Messages component with custom dimensions',
      code: `function CustomSizedMessages() {
  return (
    <Messages
      messages={messages}
      width="600px"
      bodyHeight="400px"
      otherAvatar="/avatars/user.jpg"
      onSendMessage={(text) => {
        // Handle message sending
      }}
    />
  );
}`,
      preview: true
    }
  ],
  accessibility: {
    overview: 'The Messages component follows WCAG 2.1 guidelines with proper ARIA attributes, keyboard navigation, and screen reader support for chat interfaces.',
    keyboardSupport: [
      {
        key: 'Tab',
        action: 'Moves focus to the next focusable element (input field, send button)'
      },
      {
        key: 'Shift + Tab',
        action: 'Moves focus to the previous focusable element'
      },
      {
        key: 'Enter',
        action: 'Sends the message (when in input field)'
      },
      {
        key: 'Escape',
        action: 'Clears the input field'
      }
    ],
    ariaAttributes: [
      {
        attribute: 'role="log"',
        description: 'Applied automatically to indicate chat log',
        required: true
      },
      {
        attribute: 'aria-label',
        description: 'Descriptive label for the messages container',
        required: false
      },
      {
        attribute: 'aria-live',
        description: 'Applied to announce new messages to screen readers',
        required: false
      },
      {
        attribute: 'aria-atomic',
        description: 'Indicates whether entire region should be announced',
        required: false
      }
    ],
    guidelines: [
      'Provide clear labels for message input',
      'Announce new messages to screen readers',
      'Ensure message content is accessible',
      'Provide alternative text for images',
      'Ensure file attachments are accessible',
      'Use proper timestamps for message context',
      'Ensure sufficient color contrast for message bubbles'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'Input field receives focus when tabbed to',
      'New messages are announced to screen readers',
      'Focus moves logically through interactive elements',
      'Message history is accessible to screen readers'
    ]
  }
};

