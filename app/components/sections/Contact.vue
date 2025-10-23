<template>
  <div id="contact" class="contact-page">
    <!-- Декоративное изображение слева -->
    <div class="decoration-left">
      <img src="../../assets/images/contactheart1.png" alt="" />
    </div>

    <!-- Декоративное изображение справа -->
    <div class="decoration-right">
      <img src="../../assets/images/contactheart2.png" alt="" />
    </div>

    <div class="contact-container">
      <div class="contact-header" v-if="data">
        <h2 class="contact-title">{{ data.contact_title || 'Contact us' }}</h2>
        <p class="contact-subtitle" v-if="data.contact_subtitle">
          {{ data.contact_subtitle }}
        </p>
      </div>

      <form @submit.prevent="handleSubmit" class="contact-form">
        <div class="form-group">
          <input v-model="form.name" type="text" placeholder="Name" class="form-input" required />
        </div>

        <div class="form-group">
          <input
            v-model="form.email"
            type="email"
            placeholder="Email"
            class="form-input"
            required
          />
        </div>

        <div class="form-group">
          <input v-model="form.phone" type="tel" placeholder="Phone" class="form-input" />
        </div>

        <div class="form-group">
          <textarea
            v-model="form.message"
            placeholder="Message"
            class="form-textarea"
            rows="6"
            required
          ></textarea>
        </div>

        <button type="submit" class="submit-button" :disabled="isSubmitting">
          <span v-if="!isSubmitting">Send</span>
          <span v-else>Sending...</span>
          <img v-if="!isSubmitting" src="../../assets/images/contact_sabmit.png" />
          <div v-else class="spinner"></div>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const { pageData } = usePageData();
const data = computed(() => pageData.value);

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
});

const isSubmitting = ref(false);
const submitStatus = ref(null);

const handleSubmit = async () => {
  isSubmitting.value = true;
  submitStatus.value = null;

  console.log('📧 Starting form submission...');
  console.log('📝 Form data:', {
    name: form.value.name,
    email: form.value.email,
    phone: form.value.phone,
    message: form.value.message,
  });

  try {
    const formData = new FormData();
    formData.append('name', form.value.name);
    formData.append('email', form.value.email);
    formData.append('phone', form.value.phone);
    formData.append('message', form.value.message);

    console.log('🚀 Sending request to API...');

    const response = await fetch(
      'https://goldengenie.lenddev.com.ua/wp-content/themes/api/app/pages/mailer.php',
      {
        method: 'POST',
        body: formData,
      }
    );

    console.log('📡 Response status:', response.status);
    console.log('📡 Response statusText:', response.statusText);
    console.log('📡 Response ok:', response.ok);

    // Читаем тело ответа
    const responseText = await response.text();
    console.log('📦 Response body:', responseText);

    // Пытаемся распарсить JSON если возможно
    try {
      const responseJson = JSON.parse(responseText);
      console.log('📄 Parsed JSON response:', responseJson);
    } catch (e) {
      console.log('⚠️ Response is not JSON, raw text:', responseText);
    }

    if (response.ok) {
      console.log('✅ Form submitted successfully!');
      submitStatus.value = 'success';

      // Очистка формы
      form.value = {
        name: '',
        email: '',
        phone: '',
        message: '',
      };
      console.log('🧹 Form cleared');
    } else {
      console.error('❌ Form submission failed with status:', response.status);
      submitStatus.value = 'error';
    }
  } catch (error) {
    console.error('💥 Error sending message:', error);
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    submitStatus.value = 'error';
  } finally {
    isSubmitting.value = false;
    console.log('🏁 Form submission completed');
  }
};
</script>

<style scoped>
.contact-page {
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 80px;
  position: relative;
  overflow: hidden;
}

/* Декоративное изображение слева */
.decoration-left {
  position: absolute;
  left: 2%;
  top: -20%;
  transform: rotate(348deg);
  width: 43%;
  z-index: 0;
  opacity: 0.8;
}

.decoration-left img {
  display: block;
  filter: drop-shadow(0 20px 60px rgba(201, 160, 95, 0.3));
}

/* Декоративное изображение справа */
.decoration-right {
  position: absolute;
  right: 9%;
  bottom: -12%;
  width: 30%;
  max-width: 450px;
  z-index: 0;
  opacity: 0.8;
  transform: rotate(348deg);
}

.decoration-right img {
  display: block;
  filter: drop-shadow(0 20px 60px rgba(201, 160, 95, 0.3));
}

.contact-container {
  display: flex;
  max-width: 453px;
  width: 100%;
  z-index: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.contact-header {
  text-align: center;
  margin-bottom: 40px;
  width: 100%;
}

.contact-title {
  color: #fff;
  text-align: center;
  margin-bottom: 16px;
  letter-spacing: -0.02em;
}

.contact-subtitle {
  font-size: 16px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  max-width: 100%;
  margin: 0;
}

.contact-form {
  width: 100%;
  max-width: 453px;
  gap: 24px;
  opacity: 1;
  padding: 32px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  background: #b7c8ff0a;
  backdrop-filter: blur(44px);
  border-bottom: 1px solid #b7c8ff29;
  position: relative;
}

.form-group {
  width: 100%;
}

.form-input,
.form-textarea {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 16px 20px;
  font-size: 16px;
  color: #fff;
  transition: all 0.3s ease;
  font-family: inherit;
}

/* 🎨 УБИРАЕМ БЕЛЫЙ ФОН ПРИ АВТОЗАПОЛНЕНИИ - ДОБАВЛЕНО ЗДЕСЬ */
.form-input:-webkit-autofill,
.form-input:-webkit-autofill:hover,
.form-input:-webkit-autofill:focus,
.form-input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px transparent inset !important;
  -webkit-text-fill-color: #fff !important;
  background-color: transparent !important;
  transition: background-color 5000s ease-in-out 0s;
  caret-color: #fff;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  background: transparent;
  border-bottom-color: #c9a05f;
  box-shadow: 0 2px 8px rgba(201, 160, 95, 0.2);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
  border-radius: 4px;
}

.form-textarea:focus {
  border-color: #c9a05f;
}

.submit-button {
  background: linear-gradient(135deg, #c9a05f 0%, #b8924c 100%);
  color: #000;
  border: none;
  border-radius: 50px;
  padding: 16px 40px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0 8px 24px rgba(201, 160, 95, 0.3);
}

.submit-button span {
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: #ffffff;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(201, 160, 95, 0.4);
}

.submit-button:active:not(:disabled) {
  transform: translateY(0);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 1920px) {
  .decoration-left {
    position: absolute;
    left: 5%;
    top: -13%;
    transform: rotate(348deg);
    width: 51%;
    z-index: 0;
    opacity: 0.8;
  }

  .decoration-right {
    position: absolute;
    right: 4%;
    bottom: -7%;
    width: 30%;
    max-width: 450px;
    z-index: 0;
    opacity: 0.8;
    transform: rotate(348deg);
  }
}

/* Адаптивность для планшетов */
@media (max-width: 1024px) {
  .decoration-left {
    position: absolute;
    left: -17%;
    top: -5%;
    transform: rotate(348deg);
    width: 75%;
    z-index: 0;
    opacity: 0.8;
  }

  .decoration-right {
    position: absolute;
    right: 4%;
    bottom: -7%;
    width: 30%;
    max-width: 450px;
    z-index: 0;
    opacity: 0.8;
    transform: rotate(348deg);
  }
}

/* Адаптивность для мобильных */
@media (max-width: 768px) {
  .contact-title {
    margin-bottom: 12px;
  }

  .contact-subtitle {
    font-size: 14px;
  }

  .contact-header {
    margin-bottom: 32px;
  }

  .contact-page {
    padding: 0px 16px;
  }

  .form-input,
  .form-textarea {
    padding: 14px 16px;
    font-size: 15px;
  }

  .submit-button {
    padding: 14px 32px;
    font-size: 16px;
  }

  .decoration-left {
    position: absolute;
    left: -17%;
    top: -26%;
    transform: rotate(348deg);
    width: 100%;
    z-index: 0;
    opacity: 0.8;
  }

  .decoration-right {
    position: absolute;
    right: 0%;
    bottom: -8%;
    width: 41%;
    max-width: 450px;
    z-index: 0;
    opacity: 0.8;
    transform: rotate(348deg);
  }
}

@media (max-width: 480px) {

  .contact-subtitle {
    font-size: 13px;
  }

  .form-input,
  .form-textarea {
    font-size: 14px;
    padding: 12px 14px;
  }

  .submit-button {
    padding: 13px 28px;
    font-size: 15px;
  }

  .submit-button span {
    font-size: 15px;
  }

  .decoration-left {
    position: absolute;
    left: -24%;
    top: -12%;
    transform: rotate(348deg);
    width: 100%;
    z-index: 0;
    opacity: 0.8;
  }

  .decoration-right {
    position: absolute;
    right: 4%;
    bottom: -7%;
    width: 41%;
    max-width: 450px;
    z-index: 0;
    opacity: 0.8;
    transform: rotate(348deg);
  }
}
</style>
