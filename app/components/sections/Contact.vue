<template>
  <div class="contact-page">
    <!-- Декоративное изображение слева -->
    <div class="decoration-left">
      <img src="../../assets/images/contactheart1.png" alt="" />
    </div>

    <!-- Декоративное изображение справа -->
    <div class="decoration-right">
      <img src="../../assets/images/contactheart2.png" alt="" />
    </div>

    <div class="contact-container">
      <h1 class="contact-title">Contact us</h1>

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
          <span>Send</span>
          <img src="../../assets/images/contact_sabmit.png" />
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
});

const isSubmitting = ref(false);

const handleSubmit = async () => {
  isSubmitting.value = true;

  try {
    // Здесь будет логика отправки формы
    console.log('Form submitted:', form.value);

    // Симуляция отправки
    await new Promise(resolve => setTimeout(resolve, 1000));

    alert('Message sent successfully!');

    // Очистка формы
    form.value = {
      name: '',
      email: '',
      phone: '',
      message: '',
    };
  } catch (error) {
    alert('Error sending message. Please try again.');
    console.error(error);
  } finally {
    isSubmitting.value = false;
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

.contact-title {
  font-size: 56px;
  font-weight: 600;
  color: #fff;
  text-align: center;
  margin-bottom: 60px;
  letter-spacing: -0.02em;
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
  opacity: 0.6;
  cursor: not-allowed;
}

.submit-button svg {
  transition: transform 0.3s ease;
}

.submit-button:hover:not(:disabled) svg {
  transform: translateX(4px);
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
    font-size: 40px;
    margin-bottom: 40px;
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
