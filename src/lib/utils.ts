// Notification Handler

import { writable } from 'svelte/store';

export let notifyTtitle = writable('');
export let notifyDesc = writable('');
export let showNotification = writable(false);

export let notify = (title: string, desc: string) => {
	notifyTtitle.set(title);
	notifyDesc.set(desc);
	showNotification.set(true);
	setTimeout(() => {
		showNotification.set(false);
	}, 3000);
};
