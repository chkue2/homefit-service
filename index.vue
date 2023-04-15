<template>
  <div id="servicePage">
    <div class="section-header" :class="{ scroll: isScroll }">
      <div id="headerContainer" class="header-container">
        <img
          class="header-logo"
          src="https://dcse8twossp9.cloudfront.net/static/img/v2/icon/logo-triangle-white-black.svg"
          alt
          @click="moveToHome"
        />
        <div
          id="nav-icon3"
          :class="{ open: isMobileMenuOpen }"
          @click="handlerClickMobileMenu"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="header-menu" :class="{ open: isMobileMenuOpen }">
          <span
            class="menu-text"
            :class="{ on: onCategory === 'about' }"
            @click="handlerClickMenu('ABOUT')"
            >About</span
          >
          <div
            class="menu-text"
            :class="{ on: onCategory === 'workout' }"
            @click="handlerClickMenu('workout')"
          >
            운동
          </div>
          <div
            class="menu-text"
            :class="{ on: onCategory === 'meditation' }"
            @click="handlerClickMenu('meditation')"
          >
            요가명상
          </div>
          <div
            class="menu-text"
            :class="{ on: onCategory === 'art' }"
            @click="handlerClickMenu('art')"
          >
            미술
          </div>
          <div
            class="menu-text"
            :class="{ on: onCategory === 'music' }"
            @click="handlerClickMenu('music')"
          >
            음악
          </div>
          <div class="menu-button" @click="toggleMoveToSuggestModal(true)">
            나만의 전문가 찾기
          </div>
          <div class="menu-home" @click="moveToHome">서비스 홈으로</div>
        </div>
        <div class="header-button" @click="toggleMoveToSuggestModal(true)">
          전문가 찾기
        </div>
      </div>
    </div>
    <div class="section-full section-video">
      <video autoplay muted loop playsinline preload="auto">
        <source
          src="https://dcse8twossp9.cloudfront.net/static/img/v2/service/service-video-mo.mp4"
        />
      </video>
      <p class="video-title">
        웰니스 분야 올인원<br />전문가 매칭 서비스, 홈핏
      </p>
      <div class="down-arrow"></div>
    </div>
    <div class="section-white">
      <div class="section-container section-intro background-white intro-top">
        <p class="intro-title">
          각 분야 최고의 전문가가<br />집으로 찾아갑니다.
        </p>
        <p class="intro-subtitle">
          까다로운 검증으로 각 분야 최고의<br />전문가를 선발합니다.
        </p>
        <router-link to="/f/process/" class="intro-link"
          >전문가 검증 과정이 궁금하다면?</router-link
        >
      </div>
    </div>
    <div class="section-black">
      <div
        class="section-container section-intro background-black intro-bottom"
      >
        <p class="intro-title">홈핏은 건강과 여가를 선물합니다.</p>
        <p class="intro-subtitle">
          웰니스는 몸, 마음, 정신이 모두 건강한 상태를 뜻합니다.<br />회원의
          웰니스를 위해 다양한 프로그램을 제공합니다.
        </p>
        <img
          class="intro-image"
          src="https://dcse8twossp9.cloudfront.net/static/img/v2/service/runner.gif"
        />
      </div>
    </div>
    <!-- workout -->
    <div id="workoutPoint" class="section-white">
      <div class="section-container background-white section-top">
        <p class="top-title color--workout">운동</p>
        <p class="top-subtitle">
          신체의 변화를 목적으로, 개인 별 몸 상태를 <br />고려한 수업이
          진행됩니다.
        </p>
      </div>
    </div>
    <div class="section-full background--workout mo-not-full">
      <div id="workoutSlide" class="section-slide">
        <div id="workoutWrapper" class="section-box">
          <div class="section-card">
            <p class="card-emoji">⏰</p>
            <p class="card-title">수업 시간</p>
            <p class="card-content">60분간 진행</p>
          </div>
          <div class="section-card">
            <p class="card-emoji">🤑</p>
            <p class="card-title">수업료</p>
            <p class="card-content">
              최대 3:1까지 수업이 가능하며<br />목적 및 인원별 비용 차이 발생
            </p>
            <p
              class="card-button background--workout"
              @click="handlerClickMoveToPrice('workout')"
            >
              비용 확인 〉
            </p>
          </div>
          <div class="section-card">
            <p class="card-emoji">🤸‍♀️</p>
            <p class="card-title">일반 목적</p>
            <p class="card-content">
              체력 강화, 근력 향상, 다이어트,<br />체형 교정 등을 목적으로 하는
              분
            </p>
          </div>
          <div class="section-card">
            <p class="card-emoji">🤰</p>
            <p class="card-title">산전/산후 관리</p>
            <p class="card-content">
              출산 전후로 세심한<br />컨디션 관리가 필요한 분
            </p>
          </div>
          <div class="section-card">
            <p class="card-emoji">🤕</p>
            <p class="card-title">통증 관리</p>
            <p class="card-content">
              질병 등으로 인해 집중 관리를 통한<br />신체 기능 회복이 필요한 분
            </p>
          </div>
        </div>
      </div>
      <div class="section-flex">
        <div class="flex-column">
          <div class="section-card">
            <p class="card-emoji">⏰</p>
            <p class="card-title">수업 시간</p>
            <p class="card-content">60분간 진행</p>
          </div>
          <div class="section-card">
            <p class="card-emoji">🤸‍♀️</p>
            <p class="card-title">일반 목적</p>
            <p class="card-content">
              체력 강화, 근력 향상,<br />다이어트, 체형교정 등
            </p>
          </div>
          <div class="section-card">
            <p class="card-emoji">🤕</p>
            <p class="card-title">통증 관리</p>
            <p class="card-content">신체 기능 회복 목적의<br />집중 관리</p>
          </div>
        </div>
        <div class="flex-column">
          <div class="section-card pb-16">
            <p class="card-emoji">🤑</p>
            <p class="card-title">수업료</p>
            <p class="card-content">최대 3:1까지,<br />목적 및 인원별 상이</p>
            <p
              class="card-button background--workout"
              @click="handlerClickMoveToPrice('workout')"
            >
              비용 확인 〉
            </p>
          </div>
          <div class="section-card">
            <p class="card-emoji">🤰</p>
            <p class="card-title">산전/산후 관리</p>
            <p class="card-content">출산 전후 세심한<br />컨디션 관리</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section-full background--workout mo-not-full">
      <div class="section-container section-grid">
        <p class="grid-title">어떤 운동 수업을 기대하세요?</p>
        <div class="grid-container">
          <div class="grid-item">
            <p class="item-title">요가</p>
            <p class="item-content">
              유연성을 기르고 몸과 마음의 건강을 모두 잡을 수 있습니다.
            </p>
          </div>
          <div class="grid-item">
            <p class="item-title">필라테스</p>
            <p class="item-content">
              자세를 바르게 정렬하고 코어 근육을 제대로 기를 수 있습니다.
            </p>
          </div>
          <div class="grid-item">
            <p class="item-title">웨이트</p>
            <p class="item-content">
              체력을 강화하고 보다 강도 높은 다이어트가 가능합니다.
            </p>
          </div>
          <div class="grid-item">
            <p class="item-title">산전/산후</p>
            <p class="item-content">
              건강하고 원활한 출산 및 빠른 산후 신체 회복에 도움을 줍니다.
              (담당의 소견 확인 후 진행 권장)
            </p>
          </div>
          <div class="grid-item">
            <p class="item-title">통증 관리</p>
            <p class="item-content">
              질병, 수술 등으로 인한 신체 기능 회복을 목적으로 합니다.
            </p>
          </div>
        </div>
        <p class="grid-button" @click="moveByServiceType('workout')">
          나와 맞는 운동 전문가 찾기
        </p>
      </div>
    </div>
    <!-- meditation -->
    <div id="meditationPoint" class="section-white">
      <div class="section-container background-white section-top">
        <p class="top-title color--meditation">요가명상</p>
        <p class="top-subtitle">
          몸과 마음에 유연함을 줄 수 있는 요가 아사나 <br />수련과 명상수업이
          진행됩니다.
        </p>
      </div>
    </div>
    <div class="section-full background--meditation mo-not-full">
      <div id="meditationSlide" class="section-slide">
        <div id="meditationWrapper" class="section-box">
          <div class="section-card">
            <p class="card-emoji">⏰</p>
            <p class="card-title">수업 시간</p>
            <p class="card-content">
              60분간 진행<br />(마인드 케어 10분 이상 포함)
            </p>
          </div>
          <div class="section-card">
            <p class="card-emoji">🤑</p>
            <p class="card-title">수업료</p>
            <p class="card-content">
              최대 3:1까지 수업이 가능하며<br />인원별 비용 차이 발생
            </p>
            <p
              class="card-button background--meditation"
              @click="handlerClickMoveToPrice('meditation')"
            >
              비용 확인 〉
            </p>
          </div>
          <div class="section-card">
            <p class="card-emoji">🧘🏻‍♀️</p>
            <p class="card-title">바디 케어</p>
            <p class="card-content">깊은 요가를 경험하고 싶은 분</p>
          </div>
          <div class="section-card">
            <p class="card-emoji">🌿</p>
            <p class="card-title">마인드 케어</p>
            <p class="card-content">마음의 건강을 함께 챙기고<br />싶은 분</p>
          </div>
        </div>
      </div>
      <div class="section-flex">
        <div class="flex-column">
          <div class="section-card">
            <p class="card-emoji">⏰</p>
            <p class="card-title">수업 시간</p>
            <p class="card-content">
              60분간 진행<br />(마인드 케어 10분+ 포함)
            </p>
          </div>
          <div class="section-card">
            <p class="card-emoji">🧘🏻‍♀️</p>
            <p class="card-title">바디 케어</p>
            <p class="card-content">깊은 요가를 경험하고<br />싶은 분</p>
          </div>
        </div>
        <div class="flex-column">
          <div class="section-card">
            <p class="card-emoji">🤑</p>
            <p class="card-title">수업료</p>
            <p class="card-content">최대 3:1까지,<br />인원별 상이</p>
            <p
              class="card-button background--meditation"
              @click="handlerClickMoveToPrice('meditation')"
            >
              비용 확인 〉
            </p>
          </div>
          <div class="section-card">
            <p class="card-emoji">🌿</p>
            <p class="card-title">마인드 케어</p>
            <p class="card-content">마음의 건강을 함께<br />챙기고 싶은 분</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section-full background--meditation mo-not-full">
      <div class="section-container section-grid">
        <p class="grid-title">어떤 요가명상 수업을 기대하세요?</p>
        <div class="grid-container">
          <div class="grid-item">
            <p class="item-title">바디 케어</p>
            <p class="item-content">
              아사나 수련을 통해 근력과 유연성을 기를 수 있습니다.
            </p>
          </div>
          <div class="grid-item">
            <p class="item-title">마인드 케어</p>
            <p class="item-content">
              바디 스캔, 싱잉볼, 아로마 테라피를 통해 마음의 편안함을 얻을 수
              있습니다.
            </p>
          </div>
        </div>
        <p class="grid-button" @click="moveByServiceType('meditation')">
          나와 맞는 요가명상 전문가 찾기
        </p>
      </div>
    </div>
    <!-- art -->
    <div id="artPoint" class="section-white">
      <div class="section-container background-white section-top">
        <p class="top-title color--art">미술</p>
        <p class="top-subtitle">
          취미부터 작품 활동까지 개인 수준과 목적에<br />맞는 맞춤 수업이
          진행됩니다.
        </p>
      </div>
    </div>
    <div class="section-full background--art mo-not-full">
      <div id="artSlide" class="section-slide">
        <div id="artWrapper" class="section-box">
          <div class="section-card">
            <p class="card-emoji">⏰</p>
            <p class="card-title">수업 시간</p>
            <p class="card-content">90분간 진행</p>
          </div>
          <div class="section-card">
            <p class="card-emoji">🤑</p>
            <p class="card-title">수업료</p>
            <p class="card-content">
              최대 3:1까지 수업이 가능하며<br />인원별 비용 차이 발생
            </p>
            <p
              class="card-button background--art"
              @click="handlerClickMoveToPrice('art')"
            >
              비용 확인 〉
            </p>
          </div>
          <div class="section-card">
            <p class="card-emoji">🎨</p>
            <p class="card-title">집중 수업</p>
            <p class="card-content">
              소수 정예로 수업하며 개인 실력에<br />맞는 섬세한 코칭이 필요한 분
            </p>
          </div>
          <div class="section-card">
            <p class="card-emoji">👩🏻‍🎨</p>
            <p class="card-title">개성 찾기</p>
            <p class="card-content">
              나만의 화풍을 찾고 작품을<br />완성해보고 싶은 분
            </p>
          </div>
        </div>
      </div>
      <div class="section-flex">
        <div class="flex-column">
          <div class="section-card">
            <p class="card-emoji">⏰</p>
            <p class="card-title">수업 시간</p>
            <p class="card-content">90분간 진행</p>
          </div>
          <div class="section-card">
            <p class="card-emoji">🎨</p>
            <p class="card-title">집중 수업</p>
            <p class="card-content">
              소수 정예로, 개인 실력에<br />맞는 섬세한 코칭
            </p>
          </div>
        </div>
        <div class="flex-column">
          <div class="section-card">
            <p class="card-emoji">🤑</p>
            <p class="card-title">수업료</p>
            <p class="card-content">최대 3:1까지,<br />인원별 상이</p>
            <p
              class="card-button background--art"
              @click="handlerClickMoveToPrice('art')"
            >
              비용 확인 〉
            </p>
          </div>
          <div class="section-card">
            <p class="card-emoji">👩🏻‍🎨</p>
            <p class="card-title">개성 찾기</p>
            <p class="card-content">
              나만의 화풍을 찾고<br />작품을 완성해보기
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="section-full background--art mo-not-full">
      <div class="section-container section-grid grid-240">
        <p class="grid-title">어떤 미술 수업을 기대하세요?</p>
        <div class="grid-container">
          <div class="grid-item">
            <picture class="item-image">
              <source
                srcset="
                  https://dcse8twossp9.cloudfront.net/static/img/v2/service/paint-pc-01.webp
                "
                type="image/webp"
              />
              <img
                src="https://dcse8twossp9.cloudfront.net/static/img/v2/service/paint-pc-01.jpg"
                alt
              />
            </picture>
            <p class="item-title">유화/아크릴화</p>
            <p class="item-content">
              선명한 색채와 매력적인 질감 표현이 가능합니다.
            </p>
          </div>
          <div class="grid-item">
            <picture class="item-image">
              <source
                srcset="
                  https://dcse8twossp9.cloudfront.net/static/img/v2/service/paint-pc-02.webp
                "
                type="image/webp"
              />
              <img
                src="https://dcse8twossp9.cloudfront.net/static/img/v2/service/paint-pc-02.jpg"
                alt
              />
            </picture>
            <p class="item-title">수채화</p>
            <p class="item-content">
              물을 이용한 기법으로 맑고 투명한 느낌을 낼 수 있습니다.
            </p>
          </div>
          <div class="grid-item">
            <picture class="item-image">
              <source
                srcset="
                  https://dcse8twossp9.cloudfront.net/static/img/v2/service/paint-pc-03.webp
                "
                type="image/webp"
              />
              <img
                src="https://dcse8twossp9.cloudfront.net/static/img/v2/service/paint-pc-03.jpg"
                alt
              />
            </picture>
            <p class="item-title">오일 파스텔</p>
            <p class="item-content">
              초보자도 쉽게 그릴 수 있으며, 부드럽고 따뜻한 느낌이 특징입니다.
            </p>
          </div>
          <div class="grid-item">
            <picture class="item-image">
              <source
                srcset="
                  https://dcse8twossp9.cloudfront.net/static/img/v2/service/paint-pc-04.webp
                "
                type="image/webp"
              />
              <img
                src="https://dcse8twossp9.cloudfront.net/static/img/v2/service/paint-pc-04.jpg"
                alt
              />
            </picture>
            <p class="item-title">동양화</p>
            <p class="item-content">
              전통 채색 기법을 통한 단아한 매력을 느낄 수 있습니다.
            </p>
          </div>
          <div class="grid-item">
            <picture class="item-image">
              <source
                srcset="
                  https://dcse8twossp9.cloudfront.net/static/img/v2/service/paint-pc-05.webp
                "
                type="image/webp"
              />
              <img
                src="https://dcse8twossp9.cloudfront.net/static/img/v2/service/paint-pc-05.jpg"
                alt
              />
            </picture>
            <p class="item-title">연필/색연필화</p>
            <p class="item-content">
              재료 사용이 편리하며 매우 정밀한 표현이 가능합니다.
            </p>
          </div>
        </div>
        <p class="grid-button" @click="moveByServiceType('art')">
          나와 맞는 미술 전문가 찾기
        </p>
        <p class="grid-caption">
          *가지고 있는 미술 재료가 없어도 수업을 체험할 수 있도록 기본
          준비물(체험 키트)을 홈핏에서 무료로 제공합니다.
        </p>
      </div>
    </div>
    <!-- music -->
    <div id="musicPoint" class="section-white">
      <div class="section-container background-white section-top">
        <p class="top-title color--music">음악</p>
        <p class="top-subtitle">
          연주를 위한 기초 (자세, 악보 읽기 등) 부터 클래식,<br />팝, 가요 등
          다양한 곡을 배워볼 수 있습니다.
        </p>
      </div>
    </div>
    <div class="section-full background--music mo-not-full">
      <div id="musicSlide" class="section-slide">
        <div id="musicWrapper" class="section-box">
          <div class="section-card">
            <p class="card-emoji">⏰</p>
            <p class="card-title">수업 시간</p>
            <p class="card-content">50분간 진행</p>
          </div>
          <div class="section-card">
            <p class="card-emoji">🤑</p>
            <p class="card-title">수업료</p>
            <p class="card-content">악기에 따라 상이,<br />1:1만 가능</p>
            <p
              class="card-button background--music"
              @click="handlerClickMoveToPrice('music')"
            >
              비용 확인 〉
            </p>
          </div>
          <div class="section-card">
            <p class="card-emoji">🎶</p>
            <p class="card-title">감각 되찾기</p>
            <p class="card-content">잊어버린 연주 방법 되찾고<br />싶은 분</p>
          </div>
          <div class="section-card">
            <p class="card-emoji">😎</p>
            <p class="card-title">실력 향상</p>
            <p class="card-content">수준에 맞는 심화 수업이<br />필요한 분</p>
          </div>
        </div>
      </div>
      <div class="section-flex">
        <div class="flex-column">
          <div class="section-card">
            <p class="card-emoji">⏰</p>
            <p class="card-title">수업 시간</p>
            <p class="card-content">50분간 진행</p>
          </div>
          <div class="section-card">
            <p class="card-emoji">🎶</p>
            <p class="card-title">감각 되찾기</p>
            <p class="card-content">잊어버린 연주 방법 되찾고<br />싶은 분</p>
          </div>
        </div>
        <div class="flex-column">
          <div class="section-card">
            <p class="card-emoji">🤑</p>
            <p class="card-title">수업료</p>
            <p class="card-content">악기에 따라 상이,<br />1:1만 가능</p>
            <p
              class="card-button background--music"
              @click="handlerClickMoveToPrice('music')"
            >
              비용 확인 〉
            </p>
          </div>
          <div class="section-card">
            <p class="card-emoji">😎</p>
            <p class="card-title">실력 향상</p>
            <p class="card-content">수준에 맞는 심화 수업이<br />필요한 분</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section-full background--music mo-not-full">
      <div class="section-container section-grid">
        <p class="grid-title">어떤 음악 수업을 기대하세요?</p>
        <div class="grid-container">
          <div class="grid-item">
            <p class="item-title">피아노</p>
            <p class="item-content">
              가장 대중적인 건반 악기로, 넓은 음역대와 풍부한 표현력이
              매력적입니다.
            </p>
          </div>
          <div class="grid-item">
            <p class="item-title">바이올린</p>
            <p class="item-content">
              여러 음을 부드럽게 연결할 수 있으며, 주법에 따라 다채로운 분위기를
              낼 수 있습니다.
            </p>
          </div>
        </div>
        <p class="grid-button" @click="moveByServiceType('music')">
          나와 맞는 음악 전문가 찾기
        </p>
      </div>
    </div>
    <!-- end section -->
    <div class="section-full background--white end-section mo-not-full">
      <p class="end-title">웰니스 라이프의 시작<br />홈핏과 함께해요!</p>
      <p class="end-button" @click="toggleMoveToSuggestModal(true)">
        나만의 전문가 찾기
      </p>
      <p class="end-home" @click="moveToHome">서비스 홈으로</p>
    </div>
    <!-- modal -->
    <MoveToSuggestModal
      v-if="isMoveToSuggestModal"
      @close-move-to-suggest-modal="toggleMoveToSuggestModal(false)"
    />
    <!-- end modal -->
  </div>
</template>
<script>
import { debounce, forEach, set, get } from 'lodash'
import commonMixins from '~/assets/js/commonMixins'
export default {
  name: 'ServicePage',
  components: {
    MoveToSuggestModal: () => import('~/components/common/MoveToSuggestModal'),
  },
  mixins: [commonMixins],
  data: () => ({
    isMobile: true,
    isScroll: false,
    isMoveToSuggestModal: false,
    isMobileMenuOpen: false,
    onCategory: 'about',
    controllers: {
      workout: null,
      meditation: null,
      art: null,
      music: null,
    },
    sence: {
      workout: null,
      meditation: null,
      art: null,
      music: null,
    },
  }),
  head() {
    return {
      script: [
        {
          hid: 'tweenMax',
          src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js',
        },
        {
          hid: 'scrollMagic',
          src: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js',
        },
        {
          hid: 'gsap',
          src: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js',
        },
      ],
    }
  },
  watch: {
    isMobileMenuOpen() {
      if (this.isMobileMenuOpen === true) {
        this.enabledScrollLock()
      } else {
        this.disabledScrollLock()
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.disabledScrollLock()
      this.isMobile = window.innerWidth < 1024
      window.addEventListener('scroll', this.handlerScrollEvent)
      this.initVideoSrc()
      this.handlerScrollEvent()
      this.initScrollMagic()
      window.addEventListener(
        'resize',
        debounce(() => {
          this.handlerResizeEvent()
          this.destroyController()
          this.initScrollMagic()
        }, 300)
      )
    })
  },
  destroyed() {
    this.disabledScrollLock()
    window.removeEventListener('scroll', this.handlerScrollEvent)
    window.removeEventListener(
      'resize',
      debounce(() => {
        this.handlerResizeEvent()
        this.destroyController()
        this.initScrollMagic()
      }, 300)
    )
  },
  methods: {
    initVideoSrc() {
      const target = document.querySelector('.section-video video')
      if (window.innerWidth >= 1024) {
        target.src =
          'https://dcse8twossp9.cloudfront.net/static/img/v2/service/service-video-pc.mp4'
      } else if (window.innerWidth < 1024) {
        target.src =
          'https://dcse8twossp9.cloudfront.net/static/img/v2/service/service-video-mo.mp4'
      }
    },
    handlerResizeEvent() {
      const target = document.querySelector('.section-video video')
      if (this.isMobile && window.innerWidth >= 1024) {
        target.src =
          'https://dcse8twossp9.cloudfront.net/static/img/v2/service/service-video-pc.mp4'
        this.isMobile = false
      } else if (!this.isMobile && window.innerWidth < 1024) {
        target.src =
          'https://dcse8twossp9.cloudfront.net/static/img/v2/service/service-video-mo.mp4'
        this.isMobile = true
      }
    },
    initScrollMagic() {
      this.initScrollAction('workout', '#workoutWrapper', '#workoutSlide')
      this.initScrollAction(
        'meditation',
        '#meditationWrapper',
        '#meditationSlide'
      )
      this.initScrollAction('art', '#artWrapper', '#artSlide')
      this.initScrollAction('music', '#musicWrapper', '#musicSlide')
    },
    destroyController() {
      forEach(this.controllers, (c) => {
        if (c !== null) {
          c.destroy(true)
        }
      })
      forEach(this.sence, (s) => {
        if (s !== null) {
          s.destroy(true)
        }
      })
    },
    handlerScrollEvent() {
      this.isScroll = window.scrollY > 0
      if (
        window.scrollY >=
        document.querySelector('#musicPoint').offsetTop -
          document.querySelector('#headerContainer').clientHeight
      ) {
        this.onCategory = 'music'
      } else if (
        window.scrollY >=
        document.querySelector('#artPoint').offsetTop -
          document.querySelector('#headerContainer').clientHeight
      ) {
        this.onCategory = 'art'
      } else if (
        window.scrollY >=
        document.querySelector('#meditationPoint').offsetTop -
          document.querySelector('#headerContainer').clientHeight
      ) {
        this.onCategory = 'meditation'
      } else if (
        window.scrollY >=
        document.querySelector('#workoutPoint').offsetTop -
          document.querySelector('#headerContainer').clientHeight
      ) {
        this.onCategory = 'workout'
      } else {
        this.onCategory = 'about'
      }
    },
    initScrollAction(serviceType, wrapper, slide) {
      if (document.querySelector(slide) !== null) {
        set(this.controllers, serviceType, new window.ScrollMagic.Controller())
        const toPosition =
          document.querySelector(wrapper).clientWidth -
          document.querySelector(slide).clientWidth
        const action = new window.TimelineMax().fromTo(
          wrapper,
          1,
          { x: '0px' },
          { x: `-${toPosition < 0 ? 0 : toPosition}px` },
          0.1
        )

        set(
          this.sence,
          serviceType,
          new window.ScrollMagic.Scene({
            triggerElement: slide,
            triggerHook: 'onLeave',
            duration: '2000',
          })
            .setPin(slide)
            .setTween(action)
            .addTo(get(this.controllers, serviceType))
        )
      }
    },
    enabledScrollLock() {
      const body = document.querySelector('body')
      const html = document.querySelector('html')
      html.style.cssText = 'overflow: hidden !important'
      body.style.cssText = 'overflow: hidden !important'
    },
    disabledScrollLock() {
      const body = document.querySelector('body')
      const html = document.querySelector('html')
      body.style.cssText = ''
      html.style.cssText = ''
    },
    handlerClickMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    handlerClickMenu(menu) {
      this.isMobileMenuOpen = false
      switch (menu) {
        case 'ABOUT':
          window.scrollTo({ top: 0, behavior: 'smooth' })
          break
        default:
          document
            .querySelector(`#${menu}Point`)
            .scrollIntoView({ behavior: 'smooth' })
          break
      }
    },
    handlerClickMoveToPrice(serviceType) {
      this.$router.push(`/f/price/?type=${serviceType}`)
    },
    moveToHome() {
      location.href = '/f/'
    },
    toggleMoveToSuggestModal(val) {
      this.isMoveToSuggestModal = val
    },
  },
}
</script>
<style scoped lang="scss">
@import '~/assets/scss/usage/service.scss';
</style>
