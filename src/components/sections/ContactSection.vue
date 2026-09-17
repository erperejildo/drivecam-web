<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useLocale } from '@/composables/useLocale'
import { buildMailtoUrl, CONTACT_EMAIL } from '@/lib/mailto'
import SectionIntro from '@/components/shared/SectionIntro.vue'
import AppButton from '@/components/shared/AppButton.vue'
import IconGlyph from '@/components/shared/IconGlyph.vue'

const { locale, site } = useLocale()

const form = reactive({ name: '', email: '', message: '' })
const submitted = ref(false)

function handleSubmit() {
  const url = buildMailtoUrl({ ...form }, locale.value)
  window.location.href = url
  submitted.value = true
}
</script>

<template>
  <section id="contact" class="section contact">
    <div class="shell contact__shell">
      <div class="contact__intro" v-reveal>
        <SectionIntro
          :eyebrow="site.contact.eyebrow"
          :title="site.contact.title"
          :description="site.contact.description"
          align="left"
        />
        <p class="contact__hint">
          <IconGlyph name="mail" :size="15" />
          <span>{{ site.contact.hint }}</span>
        </p>
      </div>

      <div class="contact__panel" v-reveal="120">
        <form v-if="!submitted" class="contact__form" @submit.prevent="handleSubmit">
          <label class="contact__field">
            <span class="contact__label">{{ site.contact.nameLabel }}</span>
            <input
              v-model="form.name"
              class="contact__input"
              type="text"
              name="name"
              required
              :placeholder="site.contact.namePlaceholder"
              autocomplete="name"
            />
          </label>

          <label class="contact__field">
            <span class="contact__label">{{ site.contact.emailLabel }}</span>
            <input
              v-model="form.email"
              class="contact__input"
              type="email"
              name="email"
              required
              :placeholder="site.contact.emailPlaceholder"
              autocomplete="email"
            />
          </label>

          <label class="contact__field">
            <span class="contact__label">{{ site.contact.messageLabel }}</span>
            <textarea
              v-model="form.message"
              class="contact__input contact__input--area"
              name="message"
              rows="5"
              required
              :placeholder="site.contact.messagePlaceholder"
            ></textarea>
          </label>

          <AppButton type="submit" size="l" icon="mail" block>
            {{ site.contact.submitLabel }}
          </AppButton>
        </form>

        <div v-else class="contact__success" role="status">
          <span class="contact__success-icon">
            <IconGlyph name="check" :size="22" />
          </span>
          <h3 class="contact__success-title">{{ site.contact.successTitle }}</h3>
          <p class="contact__success-body">{{ site.contact.successBody }}</p>
          <a class="contact__success-mail" :href="`mailto:${CONTACT_EMAIL}`">{{ CONTACT_EMAIL }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/styles/breakpoints' as bp;

.contact__shell {
  display: grid;
  gap: var(--space-xl);
  align-items: start;

  @include bp.from(bp.$bp-lg) {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-2xl);
  }
}

.contact__hint {
  display: flex;
  align-items: flex-start;
  gap: var(--space-2xs);
  margin-top: var(--space-m);
  color: var(--color-ink-soft);
  font-family: var(--font-mono);
  font-size: var(--text-small);
  line-height: 1.6;

  svg {
    flex-shrink: 0;
    margin-top: 0.2rem;
    color: var(--color-accent-strong);
  }
}

.contact__panel {
  position: relative;
  padding: var(--card-padding);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  background:
    radial-gradient(120% 90% at 100% 0%, var(--color-accent-soft), transparent 60%),
    var(--color-surface);
  box-shadow: var(--shadow-card);
}

.contact__form {
  display: grid;
  gap: var(--space-m);
}

.contact__field {
  display: grid;
  gap: var(--space-3xs);
}

.contact__label {
  font-family: var(--font-mono);
  font-size: var(--text-eyebrow);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-ink-soft);
}

.contact__input {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-m);
  background: var(--color-bg);
  color: var(--color-ink);
  font-family: var(--font-body);
  font-size: var(--text-body);
  transition:
    border-color var(--duration-fast) var(--ease-out),
    box-shadow var(--duration-fast) var(--ease-out);

  &::placeholder {
    color: var(--color-ink-faint);
  }

  &:focus {
    outline: none;
    border-color: var(--color-accent);
    box-shadow: var(--focus-ring);
  }
}

.contact__input--area {
  resize: vertical;
  min-height: 8rem;
}

.contact__success {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-xs);
  min-height: 18rem;
  justify-content: center;
}

.contact__success-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border: 1px solid var(--color-accent-border);
  border-radius: var(--radius-pill);
  background: var(--color-accent-soft);
  color: var(--color-accent-strong);
}

.contact__success-title {
  font-size: var(--text-h3);
}

.contact__success-body {
  color: var(--color-ink-muted);
  line-height: var(--line-body);
}

.contact__success-mail {
  font-family: var(--font-mono);
  font-size: var(--text-small);
  color: var(--color-accent-strong);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>
