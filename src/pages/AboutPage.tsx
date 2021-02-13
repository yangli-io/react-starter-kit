import React from 'react';
import { FormattedMessage } from 'react-intl';

export default function AboutPage() {
    return (
        <div>
            <h1 test-id="about-title">
                <FormattedMessage id="about.title" />
            </h1>
        </div>
    );
}
