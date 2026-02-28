/**
 * Global type definitions for the application
 */

/**
 * Generic API response type
 */
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: Record<string, string[]>;
}

/**
 * Pagination parameters
 */
export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

/**
 * Paginated response type
 */
export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

/**
 * User type (placeholder)
 */
export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Error type
 */
export interface AppError {
  code: string;
  message: string;
  details?: unknown;
}

/**
 * Loading state type
 */
export type LoadingState = 'idle' | 'loading' | 'succeeded' | 'failed';

/**
 * Base entity interface
 */
export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}
