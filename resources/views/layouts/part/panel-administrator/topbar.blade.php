<div class="topbar justify-content-between align-items-center px-3 py-2 border-bottom">
    <!-- Sidebar Toggle -->
    <button class="toggle-btn btn-sm" id="toggleSidebar">
        &#9776;
    </button>

    <!-- Right Dropdown Menu -->
    <div class="d-flex flex-row align-items-center">
        <button type="button" class="btn btn-sm btn-link border-0 gap-2 me-3" id="refresh-page">
            <i data-lucide="refresh-ccw" class="lucide-sm text-muted"></i>
        </button>
        <div class="dropdown border-start ps-3">
            <button class="btn btn-sm dropdown-toggle border-0 d-flex align-items-center gap-2" type="button"
                id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                <i data-lucide="circle-user-round" class="lucide-lg text-muted"></i>
                <div class="d-flex flex-column text-start ms-2 me-2">
                    <span class=" fw-semibold text-truncate">{{ auth()->user()->name }}</span>
                    @if (auth()->user()?->username)
                        <small
                            class="text-muted small fw-lighter text-truncate">{{ '@' . auth()->user()->username }}</small>
                    @endif
                </div>
            </button>

            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                <li><a class="dropdown-item d-flex align-items-center" href="{{ route('page.profile.index') }}"> <i
                            data-lucide="user" class="lucide-sm text-muted me-2"></i> Profil</a></li>
                <li>
                    <hr class="dropdown-divider">
                </li>
                <li>
                    <form method="POST" action="{{ route('acc.logout') }}">
                        @csrf
                        <button type="submit"
                            class="dropdown-item d-flex align-items-center btn-logout fw-light text-danger"><i
                                data-lucide="log-out" class="lucide-sm text-danger me-2"></i> Logout</button>
                    </form>
                </li>
            </ul>
        </div>

    </div>
</div>
