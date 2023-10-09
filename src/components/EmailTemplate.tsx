import * as React from 'react';

type EmailTemplateProps = {
    name: string,
    email: string,
    message: string
}

const styles = {
    container: {
        width: '100%',
        maxWidth: '500px',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        fontFamily: 'Arial, sans-serif',
        margin: '0 auto'
    },
    header: {
        marginBottom: '20px',
        color: '#000',
        fontSize: '24px'
    },
    label: {
        fontSize: '18px',
        color: '#000',
        marginBottom: '5px'
    },
    value: {
        backgroundColor: '#f3f3f3',
        padding: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        borderRadius: '4px',
        marginBottom: '20px',
        fontSize: '16px',
        color: '#333'
    }
};

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name, email, message
}) => (
    <div style={styles.container}>
        <div style={styles.header}>IIDEV | New Message</div>

        <div>
            <div style={styles.label}>Name</div>
            <div style={styles.value}>{name}</div>
        </div>

        <div>
            <div style={styles.label}>Email</div>
            <div style={styles.value}>{email}</div>
        </div>

        <div>
            <div style={styles.label}>Message</div>
            <div style={styles.value}>{message}</div>
        </div>
    </div>
);
